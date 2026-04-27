export interface DeploymentResult {
  success: boolean;
  jobId: string;
  provider: 'nomad' | 'docker';
  metadata?: any;
}

export interface RuntimeStats {
  projectId: string;
  cpuPercent: number;
  memoryBytes: number;
  instances: number;
}

export interface RuntimeProvider {
  name: 'nomad' | 'docker';
  
  submitJob(params: {
    projectId: string;
    slug: string;
    imageTag: string;
    buildId?: string;
    deployConfig: any;
    envVars: Record<string, string>;
  }): Promise<DeploymentResult>;

  stopJob(projectId: string): Promise<{ success: boolean; message: string }>;

  scaleJob(projectId: string, count: number): Promise<{ success: boolean; count: number }>;

  getLogs(projectId: string, type?: 'stdout' | 'stderr'): Promise<{ 
    projectId: string; 
    type: string; 
    lines: string[] 
  }>;

  getStats(projectId: string): Promise<RuntimeStats>;

  checkDeploymentHealth(projectId: string): Promise<{ 
    status: 'success' | 'failed' | 'deploying'; 
    error?: string;
    description?: string;
  }>;

  // Optional: for native reverts/rollbacks if supported by provider
  revertJob?(projectId: string, imageTag: string, buildId?: string): Promise<DeploymentResult>;
}
