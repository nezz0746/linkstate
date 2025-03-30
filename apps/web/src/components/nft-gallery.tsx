import Image from "next/image";
import { Button } from "@cryptoresume/ui/components/ui/button";
import { Card, CardContent } from "@cryptoresume/ui/components/ui/card";
import { ExternalLink } from "lucide-react";

export function NFTGallery() {
  const nfts = [
    { id: 1, name: "CryptoPunk #1337", collection: "CryptoPunks" },
    { id: 2, name: "Bored Ape #8888", collection: "BAYC" },
    { id: 3, name: "Doodle #4242", collection: "Doodles" },
    { id: 4, name: "Azuki #7777", collection: "Azuki" },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {nfts.map((nft) => (
          <Card key={nft.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={`/placeholder.svg?height=200&width=200&text=${nft.name}`}
                  alt={nft.name}
                  fill
                  className="object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-3">
                <h4 className="font-medium truncate">{nft.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {nft.collection}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button variant="outline" className="w-full">
        View All NFTs
      </Button>
    </div>
  );
}
