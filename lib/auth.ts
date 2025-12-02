import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from './db';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export interface AdminUser {
  id: number;
  email: string;
  name: string;
}

export interface AppUser {
  id: number;
  email: string;
  fullName: string;
  role: string;
  isVerified: boolean;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function createAdmin(email: string, password: string, name: string) {
  const hashedPassword = await hashPassword(password);
  const admin = await prisma.admin.create({
    data: {
      email,
      passwordHash: hashedPassword,
      name,
    },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
  return admin;
}

export async function findAdminByEmail(email: string) {
  const admin = await prisma.admin.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      passwordHash: true,
      name: true,
    },
  });
  return admin;
}

export function generateToken(user: AdminUser): string {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyToken(token: string): AdminUser | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AdminUser;
    return decoded;
  } catch (error) {
    return null;
  }
}

// User helpers

export async function createUser(data: {
  email: string;
  password: string;
  fullName: string;
}): Promise<AppUser> {
  const hashedPassword = await hashPassword(data.password);
  const user = await prisma.user.create({
    data: {
      email: data.email,
      passwordHash: hashedPassword,
      fullName: data.fullName,
    },
    select: {
      id: true,
      email: true,
      fullName: true,
      role: true,
      isVerified: true,
    },
  });
  return user;
}

export async function findUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
}

export function generateUserToken(user: AppUser): string {
  return jwt.sign(
    { id: user.id, email: user.email, fullName: user.fullName, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

