// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

struct Attestation {
  bytes32 uid;
  bytes32 schema;
  uint64 time;
  uint64 expirationTime;
  uint64 revocationTime;
  bytes32 refUID;
  address recipient;
  address attester;
  bool revocable;
  bytes data;
}

interface IEAS {
  function attest(
    Attestation calldata attestation
  ) external payable returns (bytes32);
}

contract MockEAS is IEAS {
  function attest(
    Attestation calldata attestation
  ) external payable returns (bytes32) {
    return bytes32(0);
  }
}
