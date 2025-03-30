"use client";

import { useState } from "react";
import { Button } from "@cryptoresume/ui/components/ui/button";
import { Check, Wallet } from "lucide-react";

export function WalletConnect() {
  const connected = false;
  const connecting = false;

  return (
    <Button className="w-full" onClick={() => {}} disabled={true}>
      {connecting ? (
        <span className="flex items-center">
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Connecting...
        </span>
      ) : connected ? (
        <span className="flex items-center">
          <Check className="mr-2 h-4 w-4" />
          Connected
        </span>
      ) : (
        <span className="flex items-center">
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </span>
      )}
    </Button>
  );
}
