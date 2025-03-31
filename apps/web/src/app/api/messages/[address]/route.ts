import { AppDB } from "@cryptoresume/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { address: string } },
) => {
  const address = params.address;

  const messages = await AppDB.listMessagesByRecipient(address);

  return NextResponse.json(messages);
};
