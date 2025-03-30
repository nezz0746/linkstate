import { keccak256, stringToBytes } from "viem";
import { privateKeyToAccount } from "viem/accounts";

export const useLinkUtils = () => {
  const getRandomString = async (n: number = 16): Promise<string> => {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charsetLength = charset.length;
    const maxByteValue = 256; // Each byte has 256 possible values
    const maxUnbiasedByte = maxByteValue - (maxByteValue % charsetLength);

    let randomString = "";

    const generateKeyRandomBytes = async (
      length: number,
    ): Promise<Uint8Array> => {
      if (crypto.subtle) {
        try {
          // Use generateKey to generate a symmetric key of sufficient length
          const key = await crypto.subtle.generateKey(
            {
              name: "AES-GCM",
              length: 256, // length * 8, // Convert byte length to bit length
              // TODO: non 16/32 length passwords?
            },
            true,
            ["encrypt", "decrypt"],
          );
          // Export the key to raw bytes
          const keyBuffer = await crypto.subtle.exportKey("raw", key);
          return new Uint8Array(keyBuffer);
        } catch (error) {
          console.warn(
            "Failed to use generateKey. Falling back to getRandomValues.",
            error,
          );
        }
      }
      return getRandomValuesRandomBytes(length);
    };

    const getRandomValuesRandomBytes = async (
      length: number,
    ): Promise<Uint8Array> => {
      const array = new Uint8Array(length);
      crypto.getRandomValues(array);
      return array;
    };

    while (randomString.length < n) {
      const randomBytes = await generateKeyRandomBytes(n - randomString.length);
      for (const byte of randomBytes) {
        if (byte < maxUnbiasedByte) {
          const randomIndex = byte % charsetLength;
          randomString += charset.charAt(randomIndex);
        }
      }
    }

    return randomString.substring(0, n); // Return only the first 'n' characters
  };

  const generateKeysFromString = (string: string) => {
    const privateKey = keccak256(stringToBytes(string));
    const account = privateKeyToAccount(privateKey);
    return {
      address: account.address,
      privateKey: privateKey,
    };
  };

  return {
    getRandomString,
    generateKeysFromString,
  };
};
