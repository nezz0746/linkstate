import {
  createConfig as createConfigPrivy,
  WagmiProvider as PrivyWagmiProvider,
} from "@privy-io/wagmi";
import { base } from "viem/chains";
import { http, createConfig as createConfigWagmi, WagmiProvider } from "wagmi";
import { farcasterFrame } from "@farcaster/frame-wagmi-connector";
import { PrivyProvider } from "@privy-io/react-auth";
import { PrivyClientConfig } from "@privy-io/react-auth";
import { privyAppId } from "../env";
import { baseRPCUrl } from "../env";

export const privyConfig: PrivyClientConfig = {
  appearance: {
    theme: "light",
    accentColor: "#676FFF",
  },
  defaultChain: base,
  supportedChains: [base],
  loginMethods: ["wallet"],
  embeddedWallets: {
    createOnLogin: "off",
  },
};

export const privyWagmiConfig = createConfigPrivy({
  chains: [base],
  transports: {
    [base.id]: http(baseRPCUrl),
  },
});

type WagmiAppProviderProps = {
  children: React.ReactNode;
  isFrame: boolean;
};

export const WagmiAppProvider = ({
  children,
  isFrame,
}: WagmiAppProviderProps) => {
  if (isFrame) {
    const wagmiConfig = createConfigWagmi({
      chains: [base],
      transports: {
        [base.id]: http(baseRPCUrl),
      },
      connectors: [farcasterFrame()],
    });

    return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
  }

  return (
    <PrivyProvider appId={privyAppId} config={privyConfig}>
      <PrivyWagmiProvider config={privyWagmiConfig}>
        {children}
      </PrivyWagmiProvider>
    </PrivyProvider>
  );
};
