const newVersion = process.argv[2];
const chainId = process.argv[3];

// Check if argument is present, throw error if not
if (!newVersion) {
  throw new Error("New Graph Version is required as an argument");
}

const Mustache = require("mustache");
const fs = require("fs/promises");
const { execSync } = require("child_process");

const main = async () => {
  // Loop over an array and deploy a subgraph for each network
  let networks = [
    {
      startBlock: 26733973,
      contractAddress: "0xC28551dE08997e4c013F50f6E566a0F31Fc46A61",
      network: "base",
      graphName: "peanut-base",
      chainId: 8453,
      nativeAssetName: "Ethereum",
      nativeAssetSymbol: "ETH",
    },
    // {
    //   startBlock: 115817906,
    //   contractAddress: "0xb75B6e4007795e84a0f9Db97EB19C6Fc13c84A5E",
    //   network: "optimism",
    //   graphName: "peanut-opt",
    //   chainId: 10,
    //   nativeAssetName: "Ethereum",
    //   nativeAssetSymbol: "ETH",
    // },
    // {
    //   startBlock: 178053936,
    //   contractAddress: "0x43B90099a203957F1adf35Dde15ac88b3e323e75",
    //   network: "arbitrum-one",
    //   graphName: "peanut-arb",
    //   chainId: 42161,
    //   nativeAssetName: "Ethereum",
    //   nativeAssetSymbol: "ETH",
    // },
    // {
    //   startBlock: 53186282,
    //   contractAddress: "0x5746f5F68705AE7a6f3Ce8D2F2A444FFa65411a4",
    //   network: "matic",
    //   graphName: "peanut-polygon",
    //   chainId: 137,
    //   nativeAssetName: "Matic",
    //   nativeAssetSymbol: "MATIC",
    // },
    // {
    //   startBlock: 39786136,
    //   contractAddress: "0x155D491e76830Dbd8f738Cb2Ad873D2caF69DA42",
    //   network: "zksync-era",
    //   graphName: "peanut-zksync-era",
    //   chainId: 324,
    //   nativeAssetName: "Ethereum",
    //   nativeAssetSymbol: "ETH",
    // },
    // {
    //   startBlock: 5231230,
    //   contractAddress: "0x70b2132A0A39152722Dd3dA516658626A81Ab02B",
    //   network: "sepolia",
    //   graphName: "peanut-sepolia",
    //   chainId: 11155111,
    //   nativeAssetName: "Ethereum",
    //   nativeAssetSymbol: "ETH",
    // },
  ];

  if (chainId) {
    networks = networks.filter(
      (network) => network.chainId === parseInt(chainId),
    );
  }

  for (const network of networks) {
    const confiTemplate = await fs.readFile("template.yaml", "utf8");

    const filledConfig = Mustache.render(confiTemplate, network);

    await fs.writeFile(`subgraph.yaml`, filledConfig);

    // Execute the following command: graph deploy --studio <graphName>
    // This command will deploy the subgraph to the graph studio
    execSync(`bash deploy.sh ${newVersion}`, {
      stdio: "inherit",
    });
  }
};

main();
