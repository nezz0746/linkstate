import { Alchemy, Network } from "alchemy-sdk";

export const alchemy = new Alchemy({
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  network: Network.BASE_MAINNET,
});

export const nfts = (network: Network, apiKey?: string) => {
  console.log({
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    apiKey2: apiKey,
  });
  return new Alchemy({
    apiKey: apiKey ?? process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    network,
  }).nft;
};
