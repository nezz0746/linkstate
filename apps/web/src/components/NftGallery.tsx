import Image from "next/image";
import { Button } from "@cryptoresume/ui/components/ui/button";
import { Card, CardContent } from "@cryptoresume/ui/components/ui/card";
import useNfts from "../hooks/useNfts";
import ChainIcon from "./ChainIcon";
import { Skeleton } from "@cryptoresume/ui/components/ui/skeleton";

function NFTSkeleton() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Skeleton className="h-full w-full" />
                <div className="absolute top-3 right-3">
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>
              <div className="p-3 space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function NFTGallery() {
  const { data, isLoading, error } = useNfts();

  if (isLoading) return <NFTSkeleton />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {data.ownedNfts.map((nft) => {
          const id = nft.contract.address + nft.tokenId;
          const media =
            nft.image?.thumbnailUrl ??
            nft.image?.cachedUrl ??
            nft.image?.originalUrl ??
            nft.raw?.metadata?.image;

          if (nft.name?.includes(".eth")) {
            console.log(nft);
          }

          return (
            <div key={id} className="overflow-hidden border p-0">
              <div className="relative aspect-square">
                <Image
                  src={media}
                  alt={nft.name ?? "NFT " + id}
                  fill
                  unoptimized
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== nft.raw?.metadata?.image) {
                      target.src = nft.raw?.metadata?.image;
                    }
                  }}
                />
                <div className="absolute top-2 right-2 h-4 w-4 md:h-6 md:w-6">
                  <ChainIcon alchemyNetwork={nft.network} />
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-medium text-xs md:text-sm truncate">
                  {nft.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {nft.collection?.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Button variant="outline" className="w-full">
        View All NFTs
      </Button>
    </div>
  );
}
