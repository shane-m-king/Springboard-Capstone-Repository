import { Types } from "mongoose";
import { NextResponse } from "next/server";

export const invalidId = (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    console.error("Invalid ID");
    return NextResponse.json(
      { success: false, error: "Invalid ID" },
      { status: 400 }
    )
  }
  return null;
};