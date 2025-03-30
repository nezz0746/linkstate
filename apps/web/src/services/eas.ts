import {
  EAS,
  NO_EXPIRATION,
  SchemaEncoder,
} from "@ethereum-attestation-service/eas-sdk";

const EASContractAddress = "0x4200000000000000000000000000000000000021";

const eas = new EAS(EASContractAddress);
