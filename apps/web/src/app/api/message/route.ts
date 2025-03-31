import { NextRequest, NextResponse } from "next/server";
import { AppDB } from "@cryptoresume/database";

export const POST = async (request: NextRequest) => {
  const { recipientAddress, message, txHash, fromAddress } =
    await request.json();

  // TODO verify message onchain

  const newMessage = await AppDB.createMessage({
    recipientAddress,
    message,
    txHash,
    fromAddress,
  });

  return NextResponse.json(newMessage);
};
