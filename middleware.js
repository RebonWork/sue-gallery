import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const {pathname, origin} = req.nextUrl;
    const {token} = req.nextauth

    if(
      pathname.startsWith("/dashboard") && token?.user?.role !=="admin"
    ){
      // return NextResponse.redirect(origin)
      return new NextResponse("You Are not Authorized ")
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
         return !!token
      },
    },
  }
)

export const config = {
  matcher: ["/profile/:path*","/wishlist/:path*", "/cart", "/dashboard/:path*"],
};
