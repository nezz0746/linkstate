import { NextResponse } from "next/server";
import { privy } from "~/src/services/privy";

export const maxDuration = 120;

export const GET = async () => {
  const users = await privy.getUsers();
  return NextResponse.json({ users });
};
