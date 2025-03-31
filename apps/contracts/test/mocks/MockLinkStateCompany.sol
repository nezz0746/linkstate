// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {SchemaResolver} from "@eas/resolver/SchemaResolver.sol";
import {IEAS, Attestation} from "@eas/IEAS.sol";
import {LinkStateCompany} from "../../src/LinkStateCompany.sol";

contract MockLinkStateCompany is LinkStateCompany {
  constructor(address eas) LinkStateCompany((eas)) {}

  function mockOnAttest(
    Attestation calldata attestation,
    uint256 value
  ) external returns (bool) {
    return super.onAttest(attestation, value);
  }

  function mockOnRevoke(
    Attestation calldata attestation,
    uint256 value
  ) external returns (bool) {
    return super.onRevoke(attestation, value);
  }
}
