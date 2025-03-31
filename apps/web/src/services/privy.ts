import { PrivyClient } from "@privy-io/server-auth";

const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID || process.env.PRIVY_APP_ID;

console.log({ appId, secret: process.env.PRIVY_APP_SECRET });

export const privy = new PrivyClient(
  appId as string,
  process.env.PRIVY_APP_SECRET as string,
);
