// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {SchemaResolver} from "@eas/resolver/SchemaResolver.sol";
import {IEAS, Attestation} from "@eas/IEAS.sol";
import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";

//
// ██╗     ██╗███╗   ██╗██╗  ██╗███████╗████████╗ █████╗ ████████╗███████╗
// ██║     ██║████╗  ██║██║ ██╔╝██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██╔════╝
// ██║     ██║██╔██╗ ██║█████╔╝ ███████╗   ██║   ███████║   ██║   █████╗
// ██║     ██║██║╚██╗██║██╔═██╗ ╚════██║   ██║   ██╔══██║   ██║   ██╔══╝
// ███████╗██║██║ ╚████║██║  ██╗███████║   ██║   ██║  ██║   ██║   ███████╗
// ╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚══════╝
//
/// @title LinkState Company
/// @author nezzar.eth
/// @notice A decentralized company contract for the LinkState protocol
/// @dev This contract is to be used as a base contract for companies that want to attest of accounts claims (EAS)
contract LinkStateCompany is SchemaResolver, AccessControlUpgradeable {
  bytes32 public constant HR_ROLE = keccak256("HR_ROLE");
  bytes32 public constant ALUMNI_ROLE = keccak256("ALUMNI_ROLE");

  constructor(address eas) SchemaResolver(IEAS(eas)) {
    _disableInitializers();
  }

  function initialize(address admin) public initializer {
    __AccessControl_init();
    _grantRole(DEFAULT_ADMIN_ROLE, admin);
    _grantRole(HR_ROLE, admin);
  }

  function onAttest(
    Attestation calldata attestation,
    uint256 /*value*/
  ) internal override returns (bool) {
    require(
      hasRole(HR_ROLE, attestation.attester),
      "LinkStateCompany: Only HR can attest"
    );

    _grantRole(ALUMNI_ROLE, attestation.recipient);

    return true;
  }

  function onRevoke(
    Attestation calldata attestation,
    uint256 /*value*/
  ) internal override returns (bool) {
    // Revoke alumni role when attestation is revoked
    _revokeRole(ALUMNI_ROLE, attestation.recipient);
    return true;
  }
}
