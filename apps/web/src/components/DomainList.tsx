import { Badge } from "@cryptoresume/ui/components/ui/badge";
import useDomainNames from "../hooks/useDomainNames";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import DomainSkeleton from "./DomainSkeleton";
dayjs.extend(relativeTime);

export function DomainList() {
  const { domains, isLoading, error } = useDomainNames();

  if (isLoading) return <DomainSkeleton />;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {domains?.map((domain) => {
          const id = domain.name;
          return (
            <div
              key={id}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium">{domain.name}</p>
                  <Badge variant="outline" className="text-xs">
                    <p>{"ENS"}</p>
                    <Image
                      src="/ens.png"
                      alt="Chain Icon"
                      width={12}
                      className="ml-2"
                      height={12}
                    />
                  </Badge>
                </div>
                {domain?.registration?.expiryDate && (
                  <p className="text-xs text-muted-foreground">
                    Expires{" "}
                    {dayjs(
                      parseInt(domain.registration.expiryDate) * 1000,
                    ).fromNow()}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
