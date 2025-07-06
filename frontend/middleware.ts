import {type NextRequest, NextResponse} from "next/server";

export default function middleware(req: NextRequest) {
    const {url, cookies} = req;

    const session = cookies.get('session')?.value

    const isAuthPage = url.includes('/signin') || url.includes('/signup');

    if (isAuthPage) {
        if (session) {
            return NextResponse.redirect(new URL('/', url))
        }

        return NextResponse.next()

    }
    if (!session) {
        return  NextResponse.redirect(new URL('/signin', url))
    }
}

export const config = {
    matcher: ['/signin/:path*', '/dashboard/:path*', '/signup/:path*']
}