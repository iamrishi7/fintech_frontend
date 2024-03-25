import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse as res } from "next/server";
import { cookies } from 'next/headers'

// Secret key used to sign JWT tokens
const secretKey = process.env.JWT_SECRET || "";

// Define your API route handler
export async function POST(req: NextApiRequest) {
  try {
    const cookiestore = cookies()
    const token = cookiestore.get("token")

    // Check if the token cookie exists
    if (!token?.value) {
      return res.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Token is valid, redirect to dashboard
    return res.json(
      {
        ok: true,
        message: "valid session",
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle any errors
    console.error("Error:", error);
    return res.json({ message: "Unauthorized" }, { status: 401 });
  }
}
