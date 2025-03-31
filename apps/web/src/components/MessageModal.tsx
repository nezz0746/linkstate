"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@cryptoresume/ui/components/ui/dialog";
import { Button } from "@cryptoresume/ui/components/ui/button";
import { Textarea } from "@cryptoresume/ui/components/ui/textarea";
import { useMessage } from "~/src/contexts/MessageContext";
import { useAccount } from "wagmi";
import { useWriteLinkStateProfileSendMessage } from "@cryptoresume/contracts";
import { zeroAddress } from "viem";
import { useTokenPrice } from "../hooks/useTokenPrice";
import useWaitForTransactionSuccess from "../hooks/useWaitForTransactionSuccess";
import useProfileMessagePrice from "../hooks/useProfileMessagePrice";

export function MessageModal() {
  const { selectedUser, isModalOpen, closeMessageModal } = useMessage();
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    if (isModalOpen === false) {
      setMessageSent(false);
      setMessage("");
    }
  }, [isModalOpen]);

  const profileId = selectedUser?.profileNFT.tokenId;

  const { bigIntPrice, formattedPrice } = useProfileMessagePrice(profileId);

  const {
    writeContract: sendMessage,
    isPending: isSending,
    data: txHash,
  } = useWriteLinkStateProfileSendMessage();

  const { isLoading: isWaitingForTransactionSuccess } =
    useWaitForTransactionSuccess(txHash, () => {
      fetch("/api/message", {
        method: "POST",
        body: JSON.stringify({
          recipientAddress: selectedUser?.user.wallet.address,
          message,
        }),
      }).then(() => {
        setMessageSent(true);
      });
    });

  const { price: usdPrice } = useTokenPrice(zeroAddress);

  if (!selectedUser) return null;

  const sending = isSending || isWaitingForTransactionSuccess;

  return (
    <Dialog open={isModalOpen} onOpenChange={closeMessageModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send Message</DialogTitle>
          <DialogDescription>
            Send a message to{" "}
            {selectedUser.user.customMetadata.ens ||
              selectedUser.user.farcaster?.username ||
              selectedUser.user.wallet.address?.slice(0, 6)}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[100px]"
          />
          <div className="flex flex-row justify-between gap-2 items-center">
            <p>Price</p>
            <div className="border-b border-dotted" />
            <p className="font-bold">
              {formattedPrice} ETH
              {usdPrice && (
                <span className="text-sm ml-1 text-muted-foreground font-normal">
                  ({usdPrice * Number(formattedPrice)} $)
                </span>
              )}
            </p>
          </div>
          <Button
            loading={sending}
            onClick={() => {
              if (!profileId) return;

              sendMessage({
                args: [BigInt(profileId), "0x"],
                value: bigIntPrice,
              });
            }}
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
          </Button>
          {messageSent && (
            <p className="text-sm text-green-500">Message sent successfully</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
