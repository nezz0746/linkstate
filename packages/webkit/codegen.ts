import { CodegenConfig } from "@graphql-codegen/cli";
import { constants } from "@cryptoresume/common";

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "./src/index.ts": {
      schema: constants.supportedChains[0].sugraphURL,
      documents: "./documents/subgraph.graphql",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        reactQueryVersion: 5,
        fetcher: {
          func: "./fetcher#fetcher",
          isReactHook: true,
        },
      },
    },
  },
};

export default config;
