import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export interface AuthenticatedUser {
  id: string;
  username: string;
  email: string;
}

export const verifyUser = (request: NextRequest): AuthenticatedUser | NextResponse => {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    console.error("Authentication failed");
    return NextResponse.json(
      { success: false, error: "Authentication required" },
      { status: 401 }
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as AuthenticatedUser;
    return decoded;
  } catch (error) {
    console.error("JWT verification failed: ", error);
    return NextResponse.json(
      { success: false, error: "Invalid or expired token" },
      { status: 401 }
    );
  }
};