import { Token } from "@cryptoresume/common";
import { Address, formatUnits } from "viem";
import { base } from "viem/chains";
import { useBalance } from "wagmi";

type UseBalanceComparaisonProps = {
  token?: Token;
  amount: bigint;
  account?: Address;
  chainId?: number;
};

const useBalanceComparaison = ({
  token,
  amount,
  account,
  chainId = base.id,
}: UseBalanceComparaisonProps) => {
  const { data: balance } = useBalance({
    address: account,
    token: token?.isNative ? undefined : token?.address,
    chainId,
    query: {
      enabled: !!token?.address,
    },
  });

  const isEnough = balance && balance.value >= amount;

  return {
    isEnough,
    balance,
    formattedBalance: formatUnits(balance?.value || 0n, token?.decimals || 18),
  };
};

export default useBalanceComparaison;
