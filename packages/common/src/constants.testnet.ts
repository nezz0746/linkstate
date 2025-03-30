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
      "https://api.studio.thegraph.com/query/958/peanut-base/version/latest",
  },
  {
    chain: optimism,
    sugraphURL:
      "https://api.studio.thegraph.com/query/958/peanut-opt/version/latest",
  },
  {
    chain: arbitrum,
    sugraphURL:
      "https://api.studio.thegraph.com/query/958/peanut-arb/version/latest",
  },
  {
    chain: polygon,
    sugraphURL:
      "https://api.studio.thegraph.com/query/958/peanut-polygon/version/latest",
  },
  {
    chain: zksync,
    sugraphURL:
      "https://api.studio.thegraph.com/query/958/peanut-zksync-era/version/latest",
  },
  {
    chain: sepolia,
    sugraphURL:
      "https://api.studio.thegraph.com/query/958/peanut-sepolia/version/latest",
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
