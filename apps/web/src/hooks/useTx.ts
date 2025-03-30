import { useWriteContract } from "wagmi";
import useWaitForTransactionSuccess from "./useWaitForTransactionSuccess";
import { useCallback } from "react";

const useTx = ({ onSuccess }: { onSuccess?: () => void }) => {
  const { writeContract, data, isPending } = useWriteContract({});

  const { isLoading } = useWaitForTransactionSuccess(
    data,
    useCallback(() => {
      onSuccess?.();
    }, [onSuccess]),
  );

  const loading = isPending || isLoading;

  return {
    writeContract,
    loading,
  };
};

export default useTx;
