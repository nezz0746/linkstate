import { Badge } from "@cryptoresume/ui/components/ui/badge";
import { Button } from "@cryptoresume/ui/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@cryptoresume/ui/components/ui/avatar";
import { Card } from "@cryptoresume/ui/components/ui/card";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { InterfaceTx } from "../types";
import TransactionSkeleton from "./TransactionSkeleton";

dayjs.extend(relativeTime);

export function TransactionHistory() {
  const { address } = useAccount();
  const {
    data,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<{
    txs: InterfaceTx[];
    next_cursor: string;
  }>({
    initialPageParam: null,
    queryKey: ["transaction-history"],
    queryFn: ({ pageParam }) => {
      let url = `https://app.interface.social/api/profile/${address}/activity`;

      if (pageParam) {
        url += `?cursor=${pageParam}`;
      }

      return fetch(url).then((res) => res.json());
    },
    getNextPageParam: (lastPage, pages) => lastPage.next_cursor,
  });

  console.log({ data });

  if (isLoading) return <TransactionSkeleton />;
  if (error) return <div>Error: {error.message}</div>;

  const transactions = data?.pages.flatMap((page) => page.txs);

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {transactions?.map((tx) => (
          <div
            key={tx.id}
            className="flex flex-col gap-3 rounded-lg border p-4"
          >
            {/* User and Time */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={tx.user.avatar} />
                  <AvatarFallback>{tx.user.name[0]?.[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{tx.user.name.join("")}</p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <img
                      src={tx.chain.image}
                      alt={tx.chain.name}
                      className="h-3.5 w-3.5 rounded-full"
                    />
                    <span>{dayjs(tx.date).fromNow()}</span>
                  </div>
                </div>
              </div>
              <Badge
                variant={tx.method.name === "Swapped" ? "default" : "secondary"}
                className="text-xs"
              >
                {tx.method.name}
              </Badge>
            </div>

            {/* Transaction Details */}
            <p className="text-sm text-muted-foreground">
              Transferred to {tx.toAddress.slice(0, 6)}...
              {tx.toAddress.slice(-4)}
            </p>

            {/* Tokens */}
            <div className="flex flex-wrap gap-3">
              {tx.tokens.map((token, index) => (
                <Card key={index} className="flex items-center gap-3 p-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                    <img
                      src={token.image}
                      alt={token.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {token.amount[0]} {token.symbol}
                    </p>
                    {token.amountUsd[0] && (
                      <p className="text-xs text-muted-foreground">
                        ${token.amountUsd[0]}
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* Action */}
            <div className="flex justify-end">
              <a
                href={`${tx.chain.explorer}/tx/${tx.hash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
      {hasNextPage && (
        <Button
          disabled={isFetchingNextPage}
          variant="outline"
          className="w-full"
          onClick={() => fetchNextPage()}
        >
          Load More
        </Button>
      )}
    </div>
  );
}
