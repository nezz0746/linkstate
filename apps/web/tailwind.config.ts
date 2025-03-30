import conf from "@cryptoresume/ui/tailwind.config";
import type { Config } from "tailwindcss";
import { merge } from "lodash";
import { fontFamily } from "tailwindcss/defaultTheme";

export default merge(
  {
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-inter)", ...fontFamily.sans],
          serif: ["var(--font-cormorant)", ...fontFamily.serif],
        },
        animation: {
          "slow-spin": "spin 80s linear infinite",
        },
        backdropBlur: {
          "3xl": "64px",
        },
      },
    },
  } as Partial<Config>,
  conf,
);
