import { useCallback, useState } from "react";
import { Button } from "@cryptoresume/ui/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@cryptoresume/ui/components/ui/select";
import useDomainNames from "../hooks/useDomainNames";
import { ensUnlinkMessage, ensVerificationMessage } from "../constants";
import { useAccount, useSignMessage } from "wagmi";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "@privy-io/react-auth";
import { useEnsVerification } from "../hooks/useEnsVerification";

export function DomainVerification() {
  const { ensVerifiedInPast30Days } = useEnsVerification();
  const [selectedDomain, setSelectedDomain] = useState<string>();
  const { domains, isLoading } = useDomainNames();
  const { address } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { user, refreshUser } = useUser();

  const handleLinkENS = useCallback(async () => {
    if (!selectedDomain || !address) return;

    try {
      const signature = await signMessageAsync({
        message: ensVerificationMessage,
      });

      await fetch("/api/verify/ens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ens: selectedDomain,
          signature,
          userId: user?.id,
        }),
      });
    } catch (error) {
      console.error("Failed to verify ENS:", error);
    }
  }, [selectedDomain, address, signMessageAsync, user?.id]);

  const handleUnlinkENS = useCallback(async () => {
    const signature = await signMessageAsync({
      message: ensUnlinkMessage,
    });

    await fetch("/api/verify/ens", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user?.id, signature }),
    });
  }, [user?.id, signMessageAsync]);

  const { mutate: unlinkENS, isPending: isUnlinkingENS } = useMutation({
    mutationFn: handleUnlinkENS,
    mutationKey: ["unlink-ens", address],
    onSuccess: () => {
      refreshUser();
    },
  });

  const { mutate: linkENS, isPending: isLinkingENS } = useMutation({
    mutationFn: handleLinkENS,
    mutationKey: ["link-ens", selectedDomain, address],
    onSuccess: () => {
      refreshUser();
    },
  });

  if (isLoading) {
    return <div>Loading domains...</div>;
  }

  if (ensVerifiedInPast30Days) {
    return (
      <Button
        variant="outline"
        className="w-full"
        onClick={() => unlinkENS()}
        loading={isUnlinkingENS}
      >
        Unlink{isUnlinkingENS ? "ing" : ""} ENS{isUnlinkingENS && "..."}
      </Button>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Select value={selectedDomain} onValueChange={setSelectedDomain}>
          <SelectTrigger className="w-[240px]">
            <SelectValue placeholder="Select a domain" />
          </SelectTrigger>
          <SelectContent>
            {domains.map((domain) => (
              <SelectItem key={domain.name} value={domain.name}>
                {domain.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          loading={isLinkingENS}
          onClick={() => {
            if (ensVerifiedInPast30Days) {
              unlinkENS();
            } else {
              linkENS();
            }
          }}
          disabled={!selectedDomain}
        >
          {isLinkingENS ? "Linking..." : "Link Domain"}
        </Button>
      </div>
    </div>
  );
}
