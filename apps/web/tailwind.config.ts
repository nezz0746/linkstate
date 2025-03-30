import conf from "@cryptoresume/ui/tailwind.config";
import type { Config } from "tailwindcss";
import { merge } from "lodash";

export default merge(
  {
    theme: {
      extend: {
        fontFamily: {},
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
