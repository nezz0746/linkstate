import { linkStateProfileAddress } from "@cryptoresume/contracts";
import { Network } from "alchemy-sdk";
import { NextResponse } from "next/server";
import { base } from "viem/chains";
import { nfts } from "~/src/services/alchemy";
import { privy } from "~/src/services/privy";

export const dynamic = "force-dynamic";

export const GET = async () => {
  const res = await nfts(Network.BASE_MAINNET, process.env.ALCHEMY_API_KEY)
    .getOwnersForContract(linkStateProfileAddress[base.id])
    .then((res) => res.owners);

  const users = await Promise.all(
    res.map(async (owner) => {
      const user = await privy.getUserByWalletAddress(owner);
      return user;
    }),
  );

  return NextResponse.json({ users });
};
