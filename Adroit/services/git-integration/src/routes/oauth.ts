import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import oauthPlugin from '@fastify/oauth2';
import jwt from 'jsonwebtoken';
import { loadGitIntegrationConfig } from '@adroit/config';
import { getIdentityDb } from '@adroit/db';
import { AppError } from '@adroit/utils';

declare module 'fastify' {
  interface FastifyInstance {
    githubOAuth2: {
      getAccessTokenFromAuthorizationCodeFlow: (
        request: any,
      ) => Promise<{ token: { access_token: string } }>;
    };
  }
}

export async function oauthRoutes(app: FastifyInstance) {
  const config = loadGitIntegrationConfig();
  const db = getIdentityDb();

  // Register GitHub OAuth2
  await app.register(oauthPlugin as unknown as FastifyPluginAsync<any>, {
    name: 'githubOAuth2',
    credentials: {
      client: {
        id: config.GITHUB_CLIENT_ID,
        secret: config.GITHUB_CLIENT_SECRET,
      },
      auth: {
        authorizeHost: 'https://github.com',
        authorizePath: '/login/oauth/authorize',
        tokenHost: 'https://github.com',
        tokenPath: '/login/oauth/access_token',
      },
    },
    startRedirectPath: '/github/login',
    callbackUri: `${config.PLATFORM_URL}/api/v1/git/github/callback`,
    scope: ['repo', 'admin:repo_hook'],
    generateStateFunction: (request: any, callback: any) => {
      const token = request.query.token;
      if (!token) {
        callback(
          new AppError(
            'Authentication token is required to link GitHub account',
            401,
            'UNAUTHORIZED',
          ),
        );
        return;
      }

      try {
        const decoded = jwt.verify(token, config.JWT_SECRET) as { sub: string };
        const statePayload = {
          userId: decoded.sub,
          nonce: Math.random().toString(36).substring(7),
        };
        const stateStr = Buffer.from(JSON.stringify(statePayload)).toString('base64url');
        callback(undefined, stateStr);
      } catch (err) {
        callback(new AppError('Invalid or expired authentication token', 401, 'UNAUTHORIZED'));
      }
    },
    checkStateFunction: (request: any, callback: (err?: Error | null) => void) => {
      try {
        const state = request.query.state;
        const decoded = JSON.parse(Buffer.from(state, 'base64url').toString('utf8'));
        if (!decoded.userId) throw new Error('Missing userId');
        callback();
      } catch (e) {
        callback(new Error('Invalid state'));
      }
    },
  });

  app.get('/github/callback', async (request, reply) => {
    // 1. Get the token from GitHub
    const { token } = await app.githubOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);

    // 2. Extract our state which contains the userId
    const stateBase64 = (request.query as any).state;
    if (!stateBase64) {
      throw new AppError('State parameter missing from OAuth callback', 400, 'BAD_REQUEST');
    }
    const statePayload = JSON.parse(Buffer.from(stateBase64, 'base64url').toString('utf8'));
    const userId = statePayload.userId;

    // 3. Get user info from GitHub to find their GitHub ID
    const ghResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'Adroit-PaaS',
      },
    });

    if (!ghResponse.ok) {
      throw new AppError('Failed to fetch user profile from GitHub', 500, 'GITHUB_API_ERROR');
    }

    const ghUser = (await ghResponse.json()) as any;
    const providerAccountId = ghUser.id.toString();

    // 4. Save/update the OAuthAccount in our identity database
    await db.oAuthAccount.upsert({
      where: {
        provider_providerAccountId: {
          provider: 'github',
          providerAccountId: providerAccountId,
        },
      },
      update: {
        accessToken: token.access_token,
        userId: userId,
      },
      create: {
        userId: userId,
        provider: 'github',
        providerAccountId: providerAccountId,
        accessToken: token.access_token,
      },
    });

    // 5. Redirect to the frontend intermediate callback page
    reply.redirect(`${config.DASHBOARD_URL}/github-callback?success=true`);
  });
}
