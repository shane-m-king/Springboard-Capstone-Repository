import connect from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { invalidId } from "@/helpers/invalidId";
import Game from "@/models/gameModel";

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

    // Get game
    const game = await Game.findOne({ _id: params.id });

    if (!game) {
      console.error("Game not found");
      return NextResponse.json(
        { success: false, error: "Game not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Game retrieved successfully",      
      data: {
        game: game.toObject(),
      }  
    }, { status: 200 });

  } catch (error: any) {
    console.error("Error fetching game: ", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch game" },
      { status: 500 }
    );
  }
}