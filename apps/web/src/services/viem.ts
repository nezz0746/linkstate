import { Chain, http } from "viem";
import {
  mainnet,
  base,
  sepolia,
  optimism,
  polygon,
  arbitrum,
  zksync,
} from "viem/chains";
import { alchemyKey } from "../env";
import { createPublicClient } from "viem";

const transports = {
  [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/${alchemyKey}`),
  [base.id]: http(`https://base-mainnet.g.alchemy.com/v2/${alchemyKey}`),
  [sepolia.id]: http(`https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}`),
  [optimism.id]: http(`https://opt-mainnet.g.alchemy.com/v2/${alchemyKey}`),
  [polygon.id]: http(`https://polygon-mainnet.g.alchemy.com/v2/${alchemyKey}`),
  [arbitrum.id]: http(`https://arb-mainnet.g.alchemy.com/v2/${alchemyKey}`),
  [zksync.id]: http(`https://zksync-mainnet.g.alchemy.com/v2/${alchemyKey}`),
} as const;

export const getClient = (chain: Chain) =>
  createPublicClient({
    chain,
    transport: transports[chain.id as keyof typeof transports],
  });
