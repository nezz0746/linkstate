const { exec } = require("child_process");
const fs = require("fs");

let stage = process.env.STAGE;

console.log("Building for stage:", stage);

if (!stage || (stage !== "testnet" && stage !== "mainnet")) {
  stage = "local";
}

// Adjust the paths according to your project structure
const stageFile = `src/constants.${stage}.ts`;
const mainFile = `src/constants.ts`;

// This example simply copies the selected stage file to main.ts
// You might want to adjust this logic depending on your project's requirements
fs.copyFileSync(stageFile, mainFile);

// Now compile the TypeScript project
exec("tsc", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
