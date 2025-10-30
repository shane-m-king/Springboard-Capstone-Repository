import connect from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { invalidId } from "@/helpers/invalidId";
import Review from "@/models/reviewModel";

interface Params {
  id: string;
}

export const GET = async (request: NextRequest, context: { params: Promise<Params> }) => {
  try {
    await connect();

    const params = await context.params;
  
    // Check if [id] is valid ObjectID
    const idCheckFailed = invalidId(params.id);
    if (idCheckFailed) return idCheckFailed;

    const { searchParams } = new URL(request.url);

    // Set up pagination
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;
    
    // Sort results
    const sortField = searchParams.get("sortField") || "createdAt";
    const sortOrder = searchParams.get("sortOrder") === "asc" ? 1 : -1;
    const sort: Record<string, 1 | -1> = { [sortField]: sortOrder };
  
    // Get reviews of specific game
    const reviews = await Review.find({game: params.id})
      .populate("user", "username") 
      .skip(skip)
      .limit(limit)
      .sort(sort);
  
    const totalReviews = await Review.countDocuments({game: params.id});
    const totalPages = Math.ceil(totalReviews / limit);
  
    return NextResponse.json({
      success: true,
      message: "Reviews retrieved successfully",
      data: {
        reviews,
        page,
        limit,
        total: totalReviews,
        totalPages,
      },
    }, { status: 200 });
  
  } catch (error: any) {
    console.error("Error fetching reviews: ", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
};