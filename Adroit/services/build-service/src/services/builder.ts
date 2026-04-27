import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { createServiceLogger, AppError } from '@adroit/utils';

const log = createServiceLogger('build-engine');

export class BuildEngine {
  private workDir: string;

  constructor() {
    this.workDir = process.env['BUILD_WORK_DIR'] || '/tmp/adroit-builds';
  }

  /**
   * Initializes the build environment directory
   */
  async setupEnv(buildId: string): Promise<string> {
    const buildPath = path.join(this.workDir, buildId);
    await fs.mkdir(buildPath, { recursive: true });
    return buildPath;
  }

  /**
   * Helper to run a command and stream logs with optional retries
   */
  private async runCommand(
    command: string, 
    args: string[], 
    cwd: string, 
    onLog: (chunk: string) => void,
    env: Record<string, string> = {},
    retries: number = 0
  ): Promise<void> {
    try {
      await new Promise<void>((resolve, reject) => {
        const child = spawn(command, args, { 
          cwd, 
          shell: true,
          env: { 
            ...process.env, 
            GIT_TERMINAL_PROMPT: '0', 
            ...env 
          }
        });

        onLog(`[EXEC] ${command} ${args.join(' ')}\n`);
        onLog(`[CWD] ${cwd}\n`);

        const timeout = setTimeout(() => {
          child.kill('SIGKILL');
          reject(new Error(`Command timed out after 10 minutes: ${command} ${args.join(' ')}`));
        }, 10 * 60 * 1000);

        child.stdout.on('data', (data) => onLog(data.toString()));
        child.stderr.on('data', (data) => onLog(data.toString()));

        child.on('close', (code) => {
          clearTimeout(timeout);
          if (code === 0) resolve();
          else reject(new Error(`Command exited with code ${code}`));
        });
        child.on('error', (err) => {
          clearTimeout(timeout);
          reject(err);
        });
      });
    } catch (err: any) {
      if (retries > 0) {
        const waitTime = 5000;
        onLog(`\n[RETRY] Phase failed: ${err.message}. Waiting ${waitTime/1000}s and retrying... (${retries} attempts left)\n\n`);
        await new Promise(r => setTimeout(r, waitTime));
        return this.runCommand(command, args, cwd, onLog, env, retries - 1);
      }
      throw err;
    }
  }

  /**
   * Orchestrates source preparation based on sourceType
   */
  async prepareSource(project: any, token: string, branch: string, destPath: string, onLog: (l: string) => void): Promise<void> {
    if (project.sourceType === 'UPLOAD') {
      if (!project.sourceUrl) throw new Error('sourceUrl is missing for UPLOAD project');
      await this.downloadAndExtract(project.sourceUrl, destPath, onLog);
    } else {
      await this.cloneRepository(project.repositoryUrl, token, branch, destPath, onLog);
    }
  }

  /**
   * Downloads and extracts a zip/tarball into the destination
   */
  async downloadAndExtract(url: string, destPath: string, onLog: (l: string) => void): Promise<void> {
    onLog(`--- [Source Preparation Status] ---\nDownloading archive from ${url}...\n`);
    
    // We'll use curl -L to handle redirects and then unzip/tar based on extension
    const isZip = url.endsWith('.zip');
    const isTar = url.endsWith('.tar.gz') || url.endsWith('.tgz');
    
    const tempFile = path.join(this.workDir, `source-${Date.now()}${isZip ? '.zip' : '.tar.gz'}`);
    
    try {
      // 1. Download
      await this.runCommand('curl', ['-L', url, '-o', tempFile], this.workDir, onLog);
      
      // 2. Extract
      if (isZip) {
        onLog('Extracting ZIP archive...\n');
        await this.runCommand('unzip', ['-o', tempFile, '-d', destPath], this.workDir, onLog);
      } else if (isTar) {
        onLog('Extracting TAR archive...\n');
        await this.runCommand('tar', ['-xzf', tempFile, '-C', destPath], this.workDir, onLog);
      } else {
        throw new Error('Unsupported archive format. Use .zip or .tar.gz');
      }
      
      onLog('Source extracted successfully.\n');
    } finally {
      // Cleanup temp archive
      await fs.unlink(tempFile).catch(() => {});
    }
  }

  /**
   * Clones a repository given its clone URL and an access token
   */
  async cloneRepository(repoUrl: string, token: string, branch: string, destPath: string, onLog: (l: string) => void): Promise<void> {
    log.info(`Cloning repository into ${destPath}`);
    const authUrl = repoUrl.replace('https://', `https://x-access-token:${token}@`);
    
    try {
      await this.runCommand('git', ['clone', '--depth', '1', '-b', branch, authUrl, destPath], this.workDir, onLog, {}, 1);
    } catch (err: any) {
      throw new AppError(`Failed to clone dictionary: ${err.message}`, 500, 'GIT_CLONE_FAILED');
    }
  }

  /**
   * Orchestrates the full Railpack analysis lifecycle
   */
  async generateDockerfile(buildPath: string, onLog: (l: string) => void): Promise<void> {
    onLog('--- [Railpack Analysis Phase] ---\n');
    log.info(`Analyzing project at ${buildPath} using Railpack`);
    
    try {
      // 1. Get high-level info for the logs
      await this.runCommand('railpack', ['info', buildPath], buildPath, onLog);
      
      // 2. Generate the build plan (and maybe log it for deep debugging)
      await this.runCommand('railpack', ['plan', buildPath], buildPath, () => {
        // We could store this for the dashboard in Phase 3
      });
      
      onLog('Analysis complete. Project is valid for Railpack build.\n');
    } catch (err: any) {
      log.warn(`Railpack analysis failed: ${err.message}. Providing failsafe Node.js config.`);
      onLog(`Railpack analysis failed. Using targeted fallback logic...\n`);
      
      // Fallback: create a manual Dockerfile if Railpack can't handle it
      const fallbackDockerfile = `
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --if-present
EXPOSE 3000
CMD ["npm", "start"]
      `.trim();
      await fs.writeFile(path.join(buildPath, 'Dockerfile'), fallbackDockerfile);
    }
  }

  /**
   * Triggers the actual image construction using Railpack Native Builder
   */
  async buildDockerImage(buildPath: string, tag: string, onLog: (l: string) => void, verbose: boolean = false): Promise<void> {
    log.info(`Building image ${tag} using Railpack Native Builder`);
    onLog('--- [Railpack Build Phase] ---\n');
    
    const buildkitHost = process.env['BUILDKIT_HOST'] || 'tcp://localhost:1234';
    
    try {
      // If we have a fallback Dockerfile, used standard docker build
      const hasDockerfile = await fs.access(path.join(buildPath, 'Dockerfile')).then(() => true).catch(() => false);
      
      if (hasDockerfile) {
        onLog('Using fallback Dockerfile for build...\n');
        await this.runCommand('docker', ['build', '-t', tag, '.'], buildPath, onLog, {}, 2);
      } else {
        // Native Railpack build with BuildKit
        const args = ['build', buildPath, '--name', tag];
        if (verbose) args.push('--verbose');
        
        await this.runCommand('railpack', args, buildPath, onLog, {
          BUILDKIT_HOST: buildkitHost
        }, 2);
      }
      
      onLog(`Build successful! Image tagged as ${tag}\n`);
    } catch (err: any) {
      log.error(`Build failed: ${err.message}`);
      throw new AppError(`Build failed: ${err.message}`, 500, 'BUILD_FAILED');
    }
  }

  async pushImage(tag: string, onLog: (l: string) => void): Promise<void> {
    log.info(`Pushing image ${tag} to local registry`);
    onLog('--- [Registry Push Phase] ---\n');
    
    await this.runCommand('docker', ['push', tag], process.cwd(), onLog, {}, 1);
    onLog('Push successful!\n');
  }

  /**
   * Cleans up the temporary build directory
   */
  async cleanup(buildId: string): Promise<void> {
    const buildPath = path.join(this.workDir, buildId);
    try {
      await fs.rm(buildPath, { recursive: true, force: true });
    } catch (err) {
      log.warn({ err, buildId }, 'Failed to clean up build directory');
    }
  }

  /**
   * Scans the project for framework-specific hints (e.g. Next.js static export)
   */
  async detectFrameworkHints(buildPath: string, onLog: (l: string) => void): Promise<{ buildCommand?: string, startCommand?: string } | null> {
    onLog('--- [Project Hint Detection Phase] ---\n');
    
    try {
      // 1. Check for Next.js Config (output: export)
      const nextConfigFiles = ['next.config.js', 'next.config.mjs', 'next.config.ts'];
      for (const file of nextConfigFiles) {
        try {
          const configContent = await fs.readFile(path.join(buildPath, file), 'utf-8');
          if (configContent.includes("output: 'export'") || configContent.includes('output: "export"')) {
            onLog(`Detected Next.js Static Export in ${file}.\n`);
            return { 
              buildCommand: 'npm install && npm run build',
              startCommand: 'npx serve out' 
            };
          }
        } catch (e) { /* skip missing */ }
      }

      // 2. Check package.json for "next export"
      try {
        const pkgJson = JSON.parse(await fs.readFile(path.join(buildPath, 'package.json'), 'utf-8'));
        const scripts = pkgJson.scripts || {};
        
        // Check for "npm run export" or "next export" in scripts
        const hasExportScript = !!scripts.export;
        const buildScript = scripts.build || '';
        const hasBuildExport = buildScript.includes('next export');

        if (hasBuildExport || hasExportScript) {
          onLog('Detected Next.js export structure.\n');
          return { 
            buildCommand: hasBuildExport ? 'npm install && npm run build' : 'npm install && npm run build && npm run export',
            startCommand: 'npx serve out' 
          };
        }
      } catch (e) { /* skip */ }

    } catch (err: any) {
      log.warn({ err }, 'Hint detection failed');
    }

    return null;
  }
}
