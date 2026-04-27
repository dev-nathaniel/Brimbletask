import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getIdentityDb } from '@adroit/db';
import { generateId } from '@adroit/utils';
import {
  ConflictError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
} from '@adroit/utils';
import { randomBytes } from 'node:crypto';

const SALT_ROUNDS = 12;

interface RegisterInput {
  email: string;
  name: string;
  password: string;
  referralCode?: string;
}

interface LoginInput {
  email: string;
  password: string;
}

interface TokenPair {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

/**
 * Register a new user, create their personal team, and optionally process a referral.
 */
export async function registerUser(input: RegisterInput): Promise<{ user: Record<string, unknown>; tokens: TokenPair }> {
  const db = getIdentityDb();

  // Check for existing user
  const existing = await db.user.findUnique({ where: { email: input.email } });
  if (existing) {
    throw new ConflictError('A user with this email already exists');
  }

  // Validate password strength
  if (input.password.length < 8) {
    throw new ValidationError('Password must be at least 8 characters');
  }

  const passwordHash = await bcrypt.hash(input.password, SALT_ROUNDS);
  const userId = generateId('usr');

  // Create user + personal team in a transaction
  const user = await db.$transaction(async (tx) => {
    const newUser = await tx.user.create({
      data: {
        id: userId,
        email: input.email,
        name: input.name,
        passwordHash,
      },
    });

    // Create personal team
    const teamSlug = `${input.name.toLowerCase().replace(/\s+/g, '-')}-${randomBytes(3).toString('hex')}`;
    const team = await tx.team.create({
      data: {
        id: generateId('team'),
        name: `${input.name}'s Team`,
        slug: teamSlug,
      },
    });

    await tx.teamMember.create({
      data: {
        id: generateId('tm'),
        userId: newUser.id,
        teamId: team.id,
        role: 'owner',
      },
    });

    // Process referral code if provided
    if (input.referralCode) {
      const referral = await tx.referral.findUnique({
        where: { code: input.referralCode },
      });
      if (referral && !referral.redeemed) {
        await tx.referral.update({
          where: { id: referral.id },
          data: {
            referredUserId: newUser.id,
            redeemed: true,
            redeemedAt: new Date(),
          },
        });
      }
    }

    // Generate referral code for the new user
    await tx.referral.create({
      data: {
        id: generateId('ref'),
        referrerId: newUser.id,
        code: `ADROIT-${randomBytes(4).toString('hex').toUpperCase()}`,
      },
    });

    return newUser;
  });

  const tokens = await generateTokens(user.id, user.email);

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      emailVerified: user.emailVerified,
      createdAt: user.createdAt,
    },
    tokens,
  };
}

/**
 * Authenticate a user with email and password.
 */
export async function loginUser(input: LoginInput): Promise<{ user: Record<string, unknown>; tokens: TokenPair }> {
  const db = getIdentityDb();

  const user = await db.user.findUnique({ where: { email: input.email } });
  if (!user) {
    throw new UnauthorizedError('Invalid email or password');
  }

  const passwordValid = await bcrypt.compare(input.password, user.passwordHash);
  if (!passwordValid) {
    throw new UnauthorizedError('Invalid email or password');
  }

  const tokens = await generateTokens(user.id, user.email);

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      emailVerified: user.emailVerified,
      createdAt: user.createdAt,
    },
    tokens,
  };
}

/**
 * Refresh an access token using a refresh token.
 */
export async function refreshAccessToken(refreshToken: string): Promise<TokenPair> {
  const db = getIdentityDb();
  const secret = process.env['JWT_REFRESH_SECRET']!;

  let payload: { sub: string; email: string };
  try {
    payload = jwt.verify(refreshToken, secret) as { sub: string; email: string };
  } catch {
    throw new UnauthorizedError('Invalid or expired refresh token');
  }

  // Check token is not revoked
  const storedToken = await db.refreshToken.findUnique({
    where: { token: refreshToken },
  });

  if (!storedToken || storedToken.revokedAt) {
    throw new UnauthorizedError('Refresh token has been revoked');
  }

  // Revoke old refresh token and issue new pair
  await db.refreshToken.update({
    where: { id: storedToken.id },
    data: { revokedAt: new Date() },
  });

  return generateTokens(payload.sub, payload.email);
}

/**
 * Revoke all refresh tokens for a user (logout everywhere).
 */
export async function revokeAllTokens(userId: string): Promise<void> {
  const db = getIdentityDb();
  await db.refreshToken.updateMany({
    where: { userId, revokedAt: null },
    data: { revokedAt: new Date() },
  });
}

/**
 * Generate a JWT access + refresh token pair.
 */
async function generateTokens(userId: string, email: string): Promise<TokenPair> {
  const db = getIdentityDb();
  const jwtSecret = process.env['JWT_SECRET']!;
  const refreshSecret = process.env['JWT_REFRESH_SECRET']!;
  const expiresIn = 900; // 15 minutes in seconds
  const refreshExpiresIn = 604800; // 7 days in seconds

  const accessToken = jwt.sign({ sub: userId, email }, jwtSecret, {
    expiresIn,
  });

  const refreshToken = jwt.sign({ sub: userId, email }, refreshSecret, {
    expiresIn: refreshExpiresIn,
  });

  // Store refresh token for revocation tracking
  await db.refreshToken.create({
    data: {
      id: generateId('rt'),
      token: refreshToken,
      userId,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    },
  });

  return {
    accessToken,
    refreshToken,
    expiresIn: 900, // 15 minutes in seconds
  };
}

/**
 * Get user by ID.
 */
export async function getUserById(userId: string) {
  const db = getIdentityDb();
  const user = await db.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
      avatarUrl: true,
      emailVerified: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!user) {
    throw new NotFoundError('User', userId);
  }

  return user;
}

/**
 * Update user profile.
 */
export async function updateUser(userId: string, data: { name?: string; avatarUrl?: string }) {
  const db = getIdentityDb();
  return db.user.update({
    where: { id: userId },
    data,
    select: {
      id: true,
      email: true,
      name: true,
      avatarUrl: true,
      emailVerified: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}
