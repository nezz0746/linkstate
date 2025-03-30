import { _SubgraphErrorPolicy_ } from "../../../packages/webkit/src";
import { base } from "viem/chains";

export const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID as string;
export const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string;
export const defaultChain = base;
export const baseRPCUrl = `https://base-mainnet.g.alchemy.com/v2/${alchemyKey}`;
