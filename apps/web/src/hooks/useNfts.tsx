import { useQuery } from "@tanstack/react-query";

import { useAccount } from "wagmi";
import { alchemyKey } from "../env";
import { Network, OwnedNft } from "alchemy-sdk";

const includes = (name: string, spamWords: string[]) => {
  return spamWords.some(
    (word) =>
      name.toLowerCase().includes(word) ||
      name.toLowerCase().includes(word.toLowerCase()),
  );
};

const filterNft = (nft: OwnedNft) => {
  const spamWords = ["FREE", "SCAN", "visit", "claim", "airdrop"];

  if (
    !nft.name ||
    !nft.mint ||
    includes(nft.name, spamWords) ||
    includes(nft.collection?.name ?? "", spamWords) ||
    includes(nft.contract.symbol ?? "", spamWords)
  )
    return null;

  return nft;
};

type NftResponse = {
  ownedNfts: (OwnedNft & { network: Network })[];
  totalCount: number;
  pageKey: string;
};

const useNfts = (): {
  data: NftResponse;
  isLoading: boolean;
  error: Error | null;
} => {
  const { address } = useAccount();

  const { data, isLoading, error } = useQuery({
    queryKey: ["nfts", address],
    queryFn: async () => {
      if (!address) return { ownedNfts: [], totalCount: 0, pageKey: "" };

      return fetch(
        `https://api.g.alchemy.com/data/v1/${alchemyKey}/assets/nfts/by-address`,
        {
          method: "POST",
          body: JSON.stringify({
            addresses: [
              {
                address,
                networks: [
                  Network.ETH_MAINNET,
                  Network.BASE_MAINNET,
                  Network.OPT_MAINNET,
                ],
              },
            ],
            withMetadata: true,
          }),
        },
      )
        .then(
          (res) =>
            res.json() as Promise<{
              data: NftResponse;
            }>,
        )
        .then(
          (res) => res.data ?? { ownedNfts: [], totalCount: 0, pageKey: "" },
        )
        .then((res) => {
          return {
            ownedNfts: res.ownedNfts.filter(filterNft),
            totalCount: res.totalCount,
            pageKey: res.pageKey,
          };
        });
    },
  });

  console.log({ data });

  return {
    data: data ?? { ownedNfts: [], totalCount: 0, pageKey: "" },
    isLoading,
    error,
  };
};

export default useNfts;
