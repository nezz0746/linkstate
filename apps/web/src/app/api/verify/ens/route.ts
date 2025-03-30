import { NextRequest, NextResponse } from "next/server";
import { getClient } from "~/src/services/viem";
import { mainnet } from "viem/chains";
import { recoverMessageAddress } from "viem";
import { ensUnlinkMessage, ensVerificationMessage } from "~/src/constants";
import { privy } from "~/src/services/privy";
import { CustomMetadata } from "~/src/types";

export const POST = async (request: NextRequest) => {
  const { ens, signature, userId } = await request.json();

  if (!ens || !signature || !userId) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const viem = getClient(mainnet);

  const ensAddress = await viem.getEnsAddress({
    name: ens,
  });

  const recoveredAddress = await recoverMessageAddress({
    message: ensVerificationMessage,
    signature,
  });

  if (recoveredAddress !== ensAddress) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const customMetadata = (await privy
    .getUser(userId)
    .then((user) => user.customMetadata)) as CustomMetadata;

  const newMetadata: CustomMetadata = {
    ...customMetadata,
    ens: ens,
    ensVerifiedAt: new Date().toISOString(),
  };

  await privy.setCustomMetadata<CustomMetadata>(userId, newMetadata);

  return NextResponse.json({ success: true });
};

export const DELETE = async (request: NextRequest) => {
  const { userId, signature } = await request.json();

  const customMetadata = (await privy
    .getUser(userId)
    .then((user) => user.customMetadata)) as CustomMetadata;

  const ens = customMetadata.ens;

  if (!ens) {
    return NextResponse.json({ error: "No ENS to unlink" }, { status: 400 });
  }

  const viem = getClient(mainnet);

  const ensAddress = await viem.getEnsAddress({
    name: ens,
  });

  const recoveredAddress = await recoverMessageAddress({
    message: ensUnlinkMessage,
    signature,
  });

  if (recoveredAddress !== ensAddress) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const newMetadata: CustomMetadata = {
    ...customMetadata,
    ens: undefined,
    ensVerifiedAt: undefined,
  };

  await privy.setCustomMetadata<CustomMetadata>(userId, newMetadata);

  return NextResponse.json({ success: true });
};
