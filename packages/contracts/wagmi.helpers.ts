import { Address } from "viem";
// @ts-ignore
import fs from "fs/promises";

export const foundryPath = "../../apps/contracts";

const deploymentsPath = `${foundryPath}/deployments`;

export const getFoundryDeployments = async () => {
  const ignoredChainIds = [31337];

  const deployments: Record<string, Record<number, Address>> = {};

  const chainIds = (await fs.readdir(deploymentsPath, "utf-8")).map((chainId) =>
    parseInt(chainId),
  );
  for (const chainId of chainIds) {
    if (ignoredChainIds.includes(chainId)) continue;

    const contractNames = await fs.readdir(
      `${deploymentsPath}/${chainId}`,
      "utf-8",
    );

    for (const contractName of contractNames) {
      const name = contractName.split(".")[0];
      if (!deployments[name]) deployments[name] = {};
      const contractAddress = await (
        await fs
          .readFile(`${deploymentsPath}/${chainId}/${contractName}`, "utf-8")
          .then(JSON.parse)
      ).address;

      deployments[name][chainId] = contractAddress;
    }
  }

  console.log(deployments);

  return deployments;
};
