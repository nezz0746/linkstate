import { useReadLinkStateProfileGetProfile } from "@cryptoresume/contracts";
import { formatEther } from "viem";

const useProfileMessagePrice = (profileID?: string) => {
  const { data: profile } = useReadLinkStateProfileGetProfile({
    args: profileID ? [BigInt(profileID)] : undefined,
    query: {
      enabled: !!profileID,
    },
  });

  return {
    bigIntPrice: profile?.messagePrice,
    formattedPrice: formatEther(profile?.messagePrice ?? BigInt(0)),
  };
};

export default useProfileMessagePrice;
