import { NextRequest, NextResponse } from "next/server";
import { AppDB } from "@cryptoresume/database";

export const POST = async (request: NextRequest) => {
  const { recipientAddress, message } = await request.json();

  // TODO verify message onchain

  const newMessage = await AppDB.createMessage({
    recipientAddress,
    message,
  });

  return NextResponse.json(newMessage);
};
