import { useAccount, useBalance, useReadContract } from "wagmi";
import { erc20Abi, formatEther, formatUnits } from "viem";
import { Token } from "../../../../packages/common/dist";

export const useTokenBalance = (token?: Token) => {
  const {
    chainId,
    isNative,
    decimals,
    symbol,
    address: tokenAddress,
  } = token ?? {};

  const { address } = useAccount();
  const { data: nativeBalanceData } = useBalance({
    address,
    chainId,
    query: {
      enabled: !!tokenAddress,
    },
  });

  const { data: tokenBalanceData } = useReadContract({
    address: tokenAddress,
    chainId,
    args: address && [address],
    abi: erc20Abi,
    functionName: "balanceOf",
    query: {
      enabled: !!tokenAddress,
    },
  });

  return {
    formatedBalance: isNative
      ? formatEther(nativeBalanceData?.value ?? BigInt(0))
      : formatUnits(tokenBalanceData ?? BigInt(0), decimals ?? 18),
    symbol,
  };
};
