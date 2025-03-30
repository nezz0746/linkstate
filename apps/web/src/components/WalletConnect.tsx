"use client";

import { Button } from "@cryptoresume/ui/components/ui/button";
import { Wallet } from "lucide-react";
import { useConnectWallet, usePrivy } from "@privy-io/react-auth";
import { useAccount } from "wagmi";

export function WalletConnect() {
  const { login } = usePrivy();
  const { connectWallet } = useConnectWallet();
  const { isConnected } = useAccount();

  return (
    <Button
      className="w-full"
      onClick={() => {
        if (!isConnected) {
          connectWallet();
        } else {
          login();
        }
      }}
    >
      <span className="flex items-center">
        <Wallet className="mr-2 h-4 w-4" />
        Connect Wallet
      </span>
    </Button>
  );
}
