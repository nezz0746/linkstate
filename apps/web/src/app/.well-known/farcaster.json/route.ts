import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    accountAssociation: {
      header:
        "eyJmaWQiOjE3MzMsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg4ZjE0NDM1NDM4NzAyRjExMTA4OEMxZGMzNkY5NTQ4ODQyNjI5RmU0In0",
      payload: "eyJkb21haW4iOiJ3YXJwdGV4dC5mdW4ifQ",
      signature:
        "MHg1NDYzYzE4OWM3M2I2MzA2YjU4MTMyZTRhMDBjMjliNWJmNjBjOTk0YmJkOWEyYzgwOGY5NzI1MjE0YjY4M2YwMWYxZjY1MTRiZTJiZDg3ZTA2NmYwMmJjZDFjMGRlZThjNzczZTgwNDEzOWI2Nzg1OTlhYjdhODdlZDM1MzZhMTFj",
    },
    frame: {
      version: "1",
      name: "Warptext",
      iconUrl: "https://warptext.fun/icon.jpg",
      homeUrl: "https://warptext.fun",
      imageUrl: "https://warptext.fun/image.png",
      buttonTitle: "Send Tokens",
      splashImageUrl: "https://warptext.fun/icon-trans.png",
      splashBackgroundColor: "#ffffff",
      webhookUrl:
        "https://api.neynar.com/f/app/9c7b7564-0cc4-4b93-8313-10f56b6acb75/event",
    },
  });
};
