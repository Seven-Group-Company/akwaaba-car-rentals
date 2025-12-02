import { NextRequest } from 'next/server';
import { verifyToken } from './auth';

export function getAdminFromRequest(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value;
  
  if (!token) {
    return null;
  }

  return verifyToken(token);
}

export function requireAdmin(request: NextRequest) {
  const admin = getAdminFromRequest(request);
  
  if (!admin) {
    throw new Error('Unauthorized');
  }

  return admin;
}

