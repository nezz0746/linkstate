import { useQuery } from "@tanstack/react-query";
import { linkStateProfileAddress } from "@cryptoresume/contracts";
import { Address } from "viem";
import { base } from "viem/chains";
import { Network } from "alchemy-sdk";
import { nfts } from "../services/alchemy";

export const useProfileNFT = (address?: Address) => {
  const { data: profileNFT } = useQuery({
    queryKey: ["profileNFT", address],
    queryFn: async () => {
      if (!address) return undefined;
      return nfts(Network.BASE_MAINNET)
        .getMintedNfts(address, {
          contractAddresses: [linkStateProfileAddress[base.id]],
        })
        .then((res) => {
          console.log({ res });
          return res.nfts[0];
        });
    },
  });

  return { profileNFT };
};
