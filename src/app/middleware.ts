import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "@/lib/utils/constants"; // Replace with your secret key

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const cookie = request.cookies.get("token");
  
  console.log(url);
  console.log(cookie);

  if (url.pathname.includes("/auth")) {
    // Check if a valid token is present
    if (cookie) {
      try {
        const decoded = verify(cookie, JWT_SECRET);
        // Check if the token is valid and not expired
        if (decoded && decoded.exp && Date.now() < decoded.exp * 1000) {
          // Redirect to the dashboard if valid token exists
          return NextResponse.redirect(new URL("/dashboard", request.url));
        }
      } catch (error) {
        // Handle invalid token or other errors
        console.error("Error verifying token:", error);
      }
    }
  }

  // If no matching conditions, continue with the request
  return NextResponse.next();
}
