import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  request.url === "/dashboard";
  return NextResponse.redirect(new URL("/login", request.url));
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }
