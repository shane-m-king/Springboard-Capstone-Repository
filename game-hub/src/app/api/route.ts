import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    return NextResponse.json(
      {success: true, message: "Welcome to the Boulder API!"},
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching API: ", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch API" },
      { status: 500 }
    );
  }
}