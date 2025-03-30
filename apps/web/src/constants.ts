export const ensVerificationMessage =
  "I am verifying my ENS name with Linkstate";
export const ensUnlinkMessage = "I am unlinking my ENS name from Linkstate";

export const appURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://linkstate.vercel.app";
