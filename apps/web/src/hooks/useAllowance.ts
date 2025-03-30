import { Address, erc20Abi, maxUint256 } from "viem";
import { base } from "viem/chains";
import { useReadContract, useSimulateContract, useWriteContract } from "wagmi";
import useWaitForTransactionSuccess from "./useWaitForTransactionSuccess";
import { Token } from "../../../../packages/common/dist";

type UseAllowanceProps = {
  token?: Token;
  amount?: bigint;
  account?: Address;
  spender?: Address;
  chainId?: number;
};

const useAllowance = ({
  token,
  amount = BigInt(0),
  account,
  spender,
  chainId = base.id,
}: UseAllowanceProps) => {
  const shouldApprove =
    !token?.isNative && !!account && !!spender && !!token?.address;

  const { data: allowance, refetch } = useReadContract({
    abi: erc20Abi,
    address: token?.address,
    functionName: "allowance",
    args: account && spender && [account, spender],
    chainId,
    query: {
      enabled: shouldApprove,
    },
  });

  const { data: simulateData, isPending } = useSimulateContract({
    abi: erc20Abi,
    address: token?.address,
    functionName: "approve",
    args: spender && [spender, amount || maxUint256],
    chainId: chainId,
    query: {
      enabled: shouldApprove,
    },
  });

  const {
    writeContract,
    data: writeData,
    isPending: writePending,
  } = useWriteContract();

  const { isLoading: isApprovalLoading } = useWaitForTransactionSuccess(
    writeData,
    () => {
      refetch();
    },
  );

  return {
    isAllowed:
      Boolean(shouldApprove) && allowance !== undefined
        ? allowance >= amount
        : true,
    isChecking: isPending,
    isApproving: isApprovalLoading || writePending,
    approve: () => {
      if (simulateData?.request) {
        writeContract(simulateData.request, {
          onError: (error) => {},
        });
      }
    },
  };
};

export default useAllowance;
