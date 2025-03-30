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

const LinkedProfiles = () => {
  const { user, refreshUser } = useUser();
  const { unlinkFarcaster } = usePrivy();
  const { linkFarcaster } = useLinkAccount({
    onSuccess: () => {
      refreshUser();
    },
  });
  const { ensVerifiedInPast30Days, customMetadata } = useEnsVerification();

  return (
    <div className="grid gap-4 md:grid-cols-2">
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
