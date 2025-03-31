import {
  Card,
  CardContent,
  CardHeader,
} from "@cryptoresume/ui/components/ui/card";
import { Badge } from "@cryptoresume/ui/components/ui/badge";
import { Check } from "lucide-react";
import Image from "next/image";
import { useEnsVerification } from "../hooks/useEnsVerification";
import { DomainVerification } from "./DomainVerification";
import { FarcasterIcon } from "./Icons";
import { Button } from "@cryptoresume/ui/components/ui/button";
import { usePrivy, useUser } from "@privy-io/react-auth";
import { useLinkAccount } from "@privy-io/react-auth";
import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";
import { nfts } from "../services/alchemy";
import { Network } from "alchemy-sdk";
import { linkStateProfileAddress } from "@cryptoresume/contracts";
import { base } from "viem/chains";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const LinkedProfiles = () => {
  const { user, refreshUser } = useUser();
  const { unlinkFarcaster } = usePrivy();
  const { linkFarcaster } = useLinkAccount({
    onSuccess: () => {
      refreshUser();
    },
  });
  const { ensVerifiedInPast30Days, customMetadata } = useEnsVerification();
  const { address } = useAccount();
  const { data: profileNFT } = useQuery({
    queryKey: ["profileNFT", address],
    queryFn: async () => {
      if (!address) return undefined;
      return nfts(Network.BASE_MAINNET)
        .getMintedNfts(address, {
          contractAddresses: [linkStateProfileAddress[base.id]],
        })
        .then((res) => {
          console.log({ res });
          return res.nfts[0];
        });
    },
  });

  console.log({ profileNFT, address });

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-slate-100 flex items-center justify-center">
                <Image
                  src="/icon-transparent.png"
                  alt="LSP"
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <h4 className="font-medium">Link State Profile</h4>
                <p className="text-xs text-muted-foreground">
                  Your profile token
                </p>
              </div>
            </div>
            {profileNFT?.tokenId && (
              <p className="text-sm border px-2 py-1 text-muted-foreground">
                #{profileNFT.tokenId}
              </p>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {profileNFT?.mint && (
            <p className="mb-2 text-sm text-muted-foreground">
              Minted {dayjs(profileNFT.mint.timestamp).fromNow()}
            </p>
          )}
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              if (!profileNFT?.tokenId) return;
              window.open(
                `https://opensea.io/item/base/${linkStateProfileAddress[base.id]}/${profileNFT?.tokenId}`,
                "_blank",
              );
            }}
          >
            See Profile NFT
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-slate-100 flex items-center justify-center">
                <Image src="/ens.png" alt="ENS" width={20} height={20} />
              </div>
              <div>
                <h4 className="font-medium">ENS</h4>
                <p className="text-xs text-muted-foreground">
                  Ethereum Name Service
                </p>
              </div>
            </div>
            {ensVerifiedInPast30Days && (
              <Badge
                variant="outline"
                className="flex items-center gap-1 border-green-500 text-green-600"
              >
                <Check className="h-3 w-3" />
                {customMetadata?.ens}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <DomainVerification />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-slate-100 flex items-center justify-center">
                <FarcasterIcon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Farcaster</h4>
                <p className="text-xs text-muted-foreground">Social Protocol</p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              if (user?.farcaster) {
                if (user?.farcaster?.fid) {
                  unlinkFarcaster(user?.farcaster?.fid);
                }
              } else {
                linkFarcaster();
              }
            }}
          >
            {user?.farcaster ? "Unlink Farcaster" : "Link Farcaster"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinkedProfiles;
