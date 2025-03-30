import { useUser } from "@privy-io/react-auth";
import { CustomMetadata } from "../types";

export const useEnsVerification = () => {
  const { user } = useUser();
  const customMetadata = user?.customMetadata as CustomMetadata;

  const ensVerifiedInPast30Days =
    customMetadata?.ensVerifiedAt &&
    new Date(customMetadata.ensVerifiedAt) >
      new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  return { ensVerifiedInPast30Days, customMetadata };
};
