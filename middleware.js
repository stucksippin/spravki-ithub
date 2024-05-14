
import { NextResponse } from 'next/server';
import withAuth from 'next-auth/middleware';

export default withAuth(function middleware(req) {
    if (req.nextUrl.pathname === '/login') {
        return;
    }
    if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token.role !== 'admin') {
        return NextResponse.redirect(new URL('/', req.url));

    }
    if (req.nextUrl.pathname.startsWith('/user/:path*') && (req.nextauth.token.role !== 'user' || req.nextauth.token.role !== 'admin')) {
        return NextResponse.redirect(new URL('/', req.url));
    }
});

export const config = {
    matcher: ['/admin/:path*', '/user/:path*']
};
