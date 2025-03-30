import { Badge } from "@cryptoresume/ui/components/ui/badge";
import { Button } from "@cryptoresume/ui/components/ui/button";
import { ExternalLink } from "lucide-react";

export function TransactionHistory() {
  const transactions = [
    {
      id: 1,
      type: "Send",
      asset: "ETH",
      amount: "0.5",
      to: "0xabc...123",
      date: "Mar 28, 2023",
    },
    {
      id: 2,
      type: "Receive",
      asset: "USDC",
      amount: "1,000",
      from: "0xdef...456",
      date: "Mar 25, 2023",
    },
    {
      id: 3,
      type: "Swap",
      asset: "ETH → DAI",
      amount: "2.0",
      date: "Mar 20, 2023",
    },
    {
      id: 4,
      type: "NFT Purchase",
      asset: "CryptoPunk",
      amount: "75 ETH",
      date: "Feb 15, 2023",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    tx.type === "Receive"
                      ? "default"
                      : tx.type === "Send"
                        ? "destructive"
                        : "secondary"
                  }
                  className="text-xs"
                >
                  {tx.type}
                </Badge>
                <p className="font-medium">
                  {tx.amount} {tx.asset}
                </p>
              </div>
              <p className="text-xs text-muted-foreground">{tx.date}</p>
            </div>
            <Button variant="ghost" size="icon">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full">
        View All Transactions
      </Button>
    </div>
  );
}
