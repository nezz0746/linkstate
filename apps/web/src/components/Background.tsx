"use client";

import { Globe } from "@cryptoresume/ui/components/magicui/globe";
import { usePrivy } from "@privy-io/react-auth";
import classNames from "classnames";

const Background = ({ children }: { children: React.ReactNode }) => {
  const { authenticated, ready } = usePrivy();

  return (
    <div
      className={classNames("relative", {
        "bg-gray-100": authenticated,
      })}
    >
      {(!authenticated || !ready) && (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
          <Globe
            config={{ width: 10000, height: 1000 }}
            className="absolute bottom-0"
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default Background;
