import { createConfig } from "@privy-io/wagmi";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  zksync,
} from "viem/chains";
import { http, useConnectorClient, Config } from "wagmi";
import { alchemyKey } from "./env";
import { providers } from "ethers";
import { useMemo } from "react";
import type { Account, Chain, Client, Transport } from "viem";

export const wagmiConfig = createConfig({
  chains: [mainnet, base, sepolia, optimism, polygon, arbitrum, zksync],
  transports: {
    [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/${alchemyKey}`),
    [base.id]: http(`https://base-mainnet.g.alchemy.com/v2/${alchemyKey}`),
    [sepolia.id]: http(`https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}`),
    [optimism.id]: http(`https://opt-mainnet.g.alchemy.com/v2/${alchemyKey}`),
    [polygon.id]: http(
      `https://polygon-mainnet.g.alchemy.com/v2/${alchemyKey}`,
    ),
    [arbitrum.id]: http(`https://arb-mainnet.g.alchemy.com/v2/${alchemyKey}`),
    [zksync.id]: http(`https://zksync-mainnet.g.alchemy.com/v2/${alchemyKey}`),
  },
});

export function clientToSigner(client: Client<Transport, Chain, Account>) {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new providers.Web3Provider(transport, network);
  const signer = provider.getSigner(account.address);
  return signer;
}

/** Hook to convert a Viem Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useConnectorClient<Config>({ chainId });
  return useMemo(() => (client ? clientToSigner(client) : undefined), [client]);
}
