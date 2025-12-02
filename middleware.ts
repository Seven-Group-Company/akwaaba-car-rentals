import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value;
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');

  // Allow access to login page
  if (isAdminRoute && request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Protect admin routes
  if (isAdminRoute && !token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};

