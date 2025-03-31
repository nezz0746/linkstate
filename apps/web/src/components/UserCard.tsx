import { User, LinkedAccount } from "~/src/types";
import {
  Card,
  CardContent,
  CardHeader,
} from "@cryptoresume/ui/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@cryptoresume/ui/components/ui/avatar";
import { Badge } from "@cryptoresume/ui/components/ui/badge";
import { truncateAddress } from "~/src/lib/utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { MessageSquare, Wallet } from "lucide-react";
import { FarcasterIcon } from "./Icons";
import { Button } from "@cryptoresume/ui/components/ui/button";
import { useProfileNFT } from "../hooks/useProfileNFT";
import { Address } from "viem";
import { useMessage } from "~/src/contexts/MessageContext";
import useProfileMessagePrice from "../hooks/useProfileMessagePrice";

dayjs.extend(relativeTime);

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  const { profileNFT } = useProfileNFT(
    user.wallet.address as Address | undefined,
  );
  const { openMessageModal } = useMessage();

  const handleMessageClick = () => {
    if (!profileNFT?.tokenId) return;
    openMessageModal(user, profileNFT);
  };

  const { bigIntPrice, formattedPrice } = useProfileMessagePrice(
    profileNFT?.tokenId,
  );

  return (
    <Card className="w-full hover:bg-accent/50 transition-colors">
      <div className="p-4 flex flex-col sm:flex-row gap-4">
        {/* Left section: Avatar and main info */}
        <div className="flex items-center gap-4 w-full sm:w-auto sm:flex-1">
          <Avatar className="h-12 w-12 shrink-0">
            <AvatarImage
              src={user.farcaster?.pfp}
              alt={
                user.customMetadata?.ens || user.farcaster?.username || "User"
              }
            />
            <AvatarFallback>
              {user.customMetadata?.ens?.[0] ||
                user.wallet.address?.slice(0, 2)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold truncate">
                {user.customMetadata?.ens ||
                  user.farcaster?.username ||
                  truncateAddress(user.wallet.address || "")}
              </h3>
              {user.customMetadata?.ensVerifiedAt && (
                <Badge variant="secondary" className="text-xs shrink-0">
                  ENS Verified
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              Joined {dayjs(user.createdAt).fromNow()}
            </p>
          </div>
        </div>

        {/* Middle section: Badges and identities */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 sm:flex-1">
          {user.farcaster && (
            <div className="flex items-center gap-2">
              <FarcasterIcon className="h-4 w-4 text-muted-foreground" />
              <Badge variant="secondary">FID: {user.farcaster.fid}</Badge>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Wallet className="h-4 w-4 text-muted-foreground" />
            <Badge variant="outline" className="font-mono">
              {truncateAddress(user.wallet.address || "")}
            </Badge>
          </div>
        </div>

        {/* Right section: Actions */}
        <div className="flex items-center gap-2 justify-end sm:shrink-0">
          {formattedPrice && (
            <Badge variant="secondary" className="font-mono">
              {formattedPrice} ETH
            </Badge>
          )}
          <Button
            size="sm"
            disabled={!profileNFT?.tokenId}
            onClick={handleMessageClick}
            className="w-full sm:w-auto"
          >
            <MessageSquare className="h-4 w-4" />
            <span className="ml-2">Message</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
