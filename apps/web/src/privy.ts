import { PrivyProviderProps } from "@privy-io/react-auth";

export const privyConfig: Omit<PrivyProviderProps, "children"> = {
  appId: process.env.NEXT_PUBLIC_PRIVY_APP_ID as string,
  config: {
    appearance: {
      theme: "light",
      accentColor: "#676FFF",
    },
    loginMethods: ["wallet"],
    embeddedWallets: {
      createOnLogin: "users-without-wallets",
    },
  },
};
