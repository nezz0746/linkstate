import { Card } from "@cryptoresume/ui/components/ui/card";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@cryptoresume/ui/components/ui/card";
import { Button } from "@cryptoresume/ui/components/ui/button";
import { ExternalLink, Wallet } from "lucide-react";
import { useAccount, useBalance } from "wagmi";
import { truncateAddress } from "../helpers";
import { formatEther } from "viem";
import useTokenBalances from "../hooks/useTokenBalances";

const WalletCard = () => {
  const { address } = useAccount();
  const { data } = useBalance({ address });
  const { data: tokenBalances } = useTokenBalances();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet</CardTitle>
        <CardDescription>Connected wallet and assets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                <Wallet className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">{truncateAddress(address)}</p>
                <p className="text-xs text-muted-foreground">Ethereum</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border p-3">
              <p className="text-xs text-muted-foreground">ETH Balance</p>
              <p className="text-xl font-bold">
                {formatEther(data?.value ?? 0n).slice(0, 6)} ETH
              </p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="text-xs text-muted-foreground">Token Count</p>
              <p className="text-xl font-bold">{tokenBalances?.length}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletCard;
