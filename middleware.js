import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    // TODO: Replace with real admin authentication check
    const isAdmin = false; // Replace with session/cookie/token logic
    if (!isAdmin) {
      const url = request.nextUrl.clone();
      url.pathname = '/signin';
      return NextResponse.redirect(url);
    }
  }

  // Protect /user routes
  if (pathname.startsWith('/user')) {
    // TODO: Replace with real user authentication check
    const isUser = false; // Replace with session/cookie/token logic
    if (!isUser) {
      const url = request.nextUrl.clone();
      url.pathname = '/signin';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/user/:path*'],
}; 