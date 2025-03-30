import { useAccount } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { alchemy } from "../services/alchemy";

const useTokenBalances = () => {
  const { address } = useAccount();

  const { data, isLoading, error } = useQuery({
    queryKey: ["token-balances", address],
    queryFn: async () => {
      if (!address) return [];
      const balances = await alchemy.core.getTokenBalances(address);
      return balances.tokenBalances;
    },
  });

  console.log({ error, data });

  return { data, loading: isLoading };
};

export default useTokenBalances;
