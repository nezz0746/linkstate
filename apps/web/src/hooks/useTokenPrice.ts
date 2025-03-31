import { Network } from "alchemy-sdk";

import { zeroAddress } from "viem";

import { useQuery } from "@tanstack/react-query";
import { alchemyKey } from "~/src/env";

export const useTokenPrice = (tokenAddress?: string) => {
  const { data: price, error } = useQuery({
    enabled: !!tokenAddress,
    initialData: 0,
    gcTime: 0,
    staleTime: 0,
    queryKey: ["price", tokenAddress],
    queryFn: async () => {
      const nativeCurrencies = [
        "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase(),
        zeroAddress,
      ];

      const currency = nativeCurrencies.includes(
        (tokenAddress as `0x${string}`).toLowerCase(),
      )
        ? zeroAddress
        : tokenAddress;

      const res = await fetch(
        `https://api.g.alchemy.com/prices/v1/${alchemyKey}/tokens/by-address`,
        {
          method: "POST",
          body: JSON.stringify({
            addresses: [
              {
                network: Network.BASE_MAINNET,
                address: currency,
              },
            ],
          }),
        },
      )
        .then((res) => res.json())
        .catch((err) => {
          return { data: [] };
        });

      return parseFloat(res.data[0]?.prices[0]?.value);
    },
  });

  return { price, error };
};
