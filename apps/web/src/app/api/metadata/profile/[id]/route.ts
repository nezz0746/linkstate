import { NextResponse } from "next/server";
import { appURL } from "~/src/constants";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const { id } = params;

  return NextResponse.json({
    name: `Profile ${id}`,
    description: `Profile ${id} description`,
    image: `${appURL}/profile.png`,
  });
};
