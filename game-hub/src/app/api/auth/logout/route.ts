import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    const response = NextResponse.json({ 
      success: true,
      message: "Logged out successfully"
    }, { status: 200 });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error: any) {
    console.error("Error logging out: ", error);
    return NextResponse.json({ success: false, error: error.message}, {status: 500});
  }
};