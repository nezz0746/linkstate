"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { getAddressDomainsQuery, getQueryClient } from "../query";
import { usePlatform } from "./platform";
import { WagmiAppProvider } from "./wagmi";
import { useAccount } from "wagmi";
import { useEffect } from "react";

const PrefetchProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();
  const { address } = useAccount();

  useEffect(() => {
    if (address) {
      queryClient.prefetchQuery(getAddressDomainsQuery(address));
    }
  }, [address]);

  return <>{children}</>;
};

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();
  const { isFrame } = usePlatform();

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiAppProvider isFrame={isFrame}>
        <PrefetchProvider>{children}</PrefetchProvider>
      </WagmiAppProvider>
    </QueryClientProvider>
  );
};

export default RootProvider;
