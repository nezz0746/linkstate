import {
  arbitrum,
  base,
  optimism,
  polygon,
  sepolia,
  zksync,
} from "viem/chains";
import { Constants, SupportedChainConfig, TokenList } from "./types";

export type AppChainId = (typeof base)["id"];

export type SupportedChains =
  | typeof base
  | typeof polygon
  | typeof optimism
  | typeof arbitrum
  | typeof zksync
  | typeof sepolia;

export type SupportedChainsIds = SupportedChains["id"];

const supportedChains: SupportedChainConfig<SupportedChains>[] = [
  {
    chain: base,
    sugraphURL:
      "https://subgraph.satsuma-prod.com/541dfde21f82/nezzars-personnal--22386/peanut-base/api",
  },
];

export const constants: Constants<SupportedChains> = {
  supportedChains,
  subgraphURLs: supportedChains.reduce(
    (acc, { chain, sugraphURL }) => {
      acc[chain.id] = sugraphURL;
      return acc;
    },
    {} as Record<SupportedChains["id"], string>,
  ),
};
