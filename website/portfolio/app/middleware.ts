import { NextResponse } from "next/server";
import { CustomRequest } from "@/types";
import { verifyToken } from "@/utils/auth";
import { logoutUser } from "@/utils/api";

export async function middleware(request: CustomRequest) {
  const { pathname } = request.nextUrl;

 if (pathname.startsWith("/admin")) {
    const token = request.cookies.get("token");

    if (!token) {
      return NextResponse.redirect(new URL("auth/login", request.url));
    }

    try {
      const decoded = await verifyToken(token.value);

      if (!decoded?.userId || !decoded?.role || decoded.role !== "ADMIN") {
        await logoutUser();
        return NextResponse.redirect(new URL("/", request.url));
      }


      request.user = { userId: decoded.userId, role: decoded.role };
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Allow all other routes (including /) without authentication
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*", // Only run middleware for /admin routes
    "/api/v1/projects/:path*",  // Add this
    "/api/v1/uploads/:path*",
  ],
};
