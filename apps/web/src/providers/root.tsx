"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "../query";
import { usePlatform } from "./platform";
import { WagmiAppProvider } from "./wagmi";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();
  const { isFrame } = usePlatform();

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiAppProvider isFrame={isFrame}>{children}</WagmiAppProvider>
    </QueryClientProvider>
  );
};

export default RootProvider;
