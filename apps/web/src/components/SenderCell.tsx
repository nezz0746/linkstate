import Link from "next/link";
import { getExplorerLink, truncateAddress } from "../helpers";
import { usePublicClient } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";

const SenderCell = ({ sender }: { sender: string }) => {
  const client = usePublicClient({ chainId: 1 });

  const { data } = useQuery({
    queryKey: ["getSenderENS", sender],
    queryFn: async () => {
      return (
        client &&
        client.getEnsName({ address: sender.toLowerCase() as Address })
      );
    },
    enabled: !!sender,
  });

  return (
    <Link
      href={getExplorerLink(sender, "address")}
      target="_blank"
      className="underline hover:text-blue-400"
    >
      {data ? data : truncateAddress(sender)}
    </Link>
  );
};

export default SenderCell;
