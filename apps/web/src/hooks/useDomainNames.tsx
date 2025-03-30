import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";
import { getAddressDomainsQuery } from "../query";
import { DomainsReturnType } from "../types";

const useDomainNames = () => {
  const { address } = useAccount();
  const { data, isLoading, error } = useQuery<DomainsReturnType>({
    ...getAddressDomainsQuery(address),
    initialData: { domains: [] },
  });

  return { domains: data?.domains ?? [], isLoading, error };
};

export default useDomainNames;
