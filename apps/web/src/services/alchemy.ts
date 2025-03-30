import { Alchemy, Network } from "alchemy-sdk";

export const alchemy = new Alchemy({
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  network: Network.BASE_MAINNET,
});

export const nfts = (network: Network) => {
  return new Alchemy({
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    network,
  }).nft;
};
