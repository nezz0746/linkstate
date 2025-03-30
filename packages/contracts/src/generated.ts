import { createUseReadContract } from "wagmi/codegen";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CryptoResume
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const cryptoResumeAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [],
    name: "getName",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cryptoResumeAbi}__
 */
export const useReadCryptoResume = /*#__PURE__*/ createUseReadContract({
  abi: cryptoResumeAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cryptoResumeAbi}__ and `functionName` set to `"getName"`
 */
export const useReadCryptoResumeGetName = /*#__PURE__*/ createUseReadContract({
  abi: cryptoResumeAbi,
  functionName: "getName",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cryptoResumeAbi}__ and `functionName` set to `"name"`
 */
export const useReadCryptoResumeName = /*#__PURE__*/ createUseReadContract({
  abi: cryptoResumeAbi,
  functionName: "name",
});
