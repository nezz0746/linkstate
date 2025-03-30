import {
  QueryClient,
  defaultShouldDehydrateQuery,
  isServer,
  UseQueryOptions,
} from "@tanstack/react-query";
import { request } from "graphql-request";
import { gql } from "graphql-request";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
        refetchInterval: 5 * 60 * 1000,
        refetchIntervalInBackground: true,
      },
      dehydrate: {
        // include pending queries in dehydration
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

type Domain = {
  name: string;
  registration: {
    expiryDate: string;
  } | null;
};

type DomainsResponse = {
  domains: Domain[];
};

export const getAddressDomainsQuery = (
  address?: `0x${string}`,
): UseQueryOptions<DomainsResponse, Error, DomainsResponse> => {
  return {
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
  };
};
