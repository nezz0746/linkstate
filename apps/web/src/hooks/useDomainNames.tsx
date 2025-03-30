import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";
import { request, gql } from "graphql-request";

const useDomainNames = () => {
  const { address } = useAccount();
  const { data, isLoading, error } = useQuery<{
    domains: {
      name: string;
      registration: {
        expiryDate: string;
      } | null;
    }[];
  }>({
    queryKey: ["domainNames", address],
    queryFn: async () => {
      if (!address) return { domains: [] };
      return request({
        url: "https://api.thegraph.com/subgraphs/name/ensdomains/ens",
        document: gql`
          query getDomainsForAccount($owner: String!) {
            domains(where: { owner: $owner }) {
              name
              registration {
                expiryDate
              }
            }
          }
        `,
        variables: {
          owner: address.toLowerCase(),
        },
      });
    },
    enabled: !!address,
  });

  return { domains: data?.domains ?? [], isLoading, error };
};

export default useDomainNames;
