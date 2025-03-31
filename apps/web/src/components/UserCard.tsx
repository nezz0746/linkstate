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

dayjs.extend(relativeTime);

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  const { profileNFT } = useProfileNFT(
    user.wallet.address as Address | undefined,
  );
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage
            src={user.farcaster?.pfp}
            alt={user.customMetadata.ens || user.farcaster?.username || "User"}
          />
          <AvatarFallback>
            {user.customMetadata.ens?.[0] || user.wallet.address?.slice(0, 2)}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">
            {user.customMetadata.ens ||
              user.farcaster?.username ||
              truncateAddress(user.wallet.address || "")}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Joined {dayjs(user.createdAt).fromNow()}</span>
            {user.customMetadata.ensVerifiedAt && (
              <Badge variant="secondary" className="text-xs">
                ENS Verified
              </Badge>
            )}
          </div>
        </div>
        <Button size="sm" disabled={!profileNFT?.tokenId}>
          <MessageSquare className="md:mr-2 h-4 w-4" />
          <p className="hidden md:block">Send Paid Message</p>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {user.farcaster && (
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <FarcasterIcon className="h-4 w-4" />
                Farcaster
              </h4>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">FID: {user.farcaster.fid}</Badge>
                {user.farcaster.bio && (
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {user.farcaster.bio}
                  </p>
                )}
              </div>
            </div>
          )}

          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              Wallet
            </h4>
            <div className="flex items-center gap-2">
              <Badge variant="outline">{user.wallet.chainType}</Badge>
              <p className="text-sm font-mono">
                {truncateAddress(user.wallet.address || "")}
              </p>
            </div>
            {user.customMetadata.ens && (
              <div className="mt-2 flex items-center gap-2">
                <Badge variant="secondary">ENS</Badge>
                <p className="text-sm">{user.customMetadata.ens}</p>
              </div>
            )}
          </div>

          {user.linkedAccounts.length > 1 && (
            <div>
              <h4 className="font-semibold mb-2">Linked Accounts</h4>
              <div className="flex flex-wrap gap-2">
                {user.linkedAccounts
                  .filter(
                    (account: LinkedAccount) =>
                      account.type !== user.wallet.type,
                  )
                  .map((account: LinkedAccount, index: number) => (
                    <Badge key={index} variant="secondary">
                      {account.type}
                    </Badge>
                  ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
