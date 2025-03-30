import { Badge } from "@cryptoresume/ui/components/ui/badge";
import { Button } from "@cryptoresume/ui/components/ui/button";
import { ExternalLink } from "lucide-react";

export function DomainList() {
  const domains = [
    { id: 1, name: "vitalik.eth", type: "ENS", expiry: "Jan 15, 2025" },
    {
      id: 2,
      name: "vbuterin.crypto",
      type: "Unstoppable",
      expiry: "Mar 22, 2024",
    },
    { id: 3, name: "ethereum.id", type: "Spaceid", expiry: "Nov 10, 2024" },
    { id: 4, name: "vitalik.lens", type: "Lens", expiry: "Aug 05, 2024" },
  ];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {domains.map((domain) => (
          <div
            key={domain.id}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium">{domain.name}</p>
                <Badge variant="outline" className="text-xs">
                  {domain.type}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Expires: {domain.expiry}
              </p>
            </div>
            <Button variant="ghost" size="icon">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full">
        View All Domains
      </Button>
    </div>
  );
}
