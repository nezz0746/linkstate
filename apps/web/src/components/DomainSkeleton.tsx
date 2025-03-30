import { Skeleton } from "@cryptoresume/ui/components/ui/skeleton";

function DomainSkeleton() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <div className="space-y-2 w-full">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-16" />
              </div>
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DomainSkeleton;
