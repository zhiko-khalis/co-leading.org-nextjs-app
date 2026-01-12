import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // No locale routing - just pass through
  return NextResponse.next();
}

export const config = {
  // Match all routes except static files and API routes
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

