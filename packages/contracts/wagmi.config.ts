import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";
import { foundryPath, getFoundryDeployments } from "./wagmi.helpers";

export default defineConfig(async () => {
  const deployments = await getFoundryDeployments();

  return {
    out: "src/generated.ts",
    plugins: [
      foundry({
        project: foundryPath,
        artifacts: `${foundryPath}/out`,
        deployments,
        include: ["CryptoResume.sol/*.json"],
      }),
      react(),
    ],
  };
});
