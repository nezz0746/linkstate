// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {UpgradeableBeacon} from "@openzeppelin/contracts/proxy/beacon/UpgradeableBeacon.sol";
import {BeaconProxy} from "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import {LinkStateCompany} from "./LinkStateCompany.sol";

contract LinkState is AccessControlUpgradeable, UUPSUpgradeable {
  /// @notice The beacon that stores the implementation of LinkStateCompany
  UpgradeableBeacon public companyBeacon;

  /// @notice Configuration struct for companies
  struct CompanyConfig {
    address admin;
    LinkStateCompany company;
  }

  /// @notice Mapping of companies
  /// @dev Maps company ID to CompanyConfig
  mapping(uint256 => CompanyConfig) public companies;

  /// @notice Counter for generating unique company IDs
  uint256 private nextCompanyId;

  event CompanyAdded(uint256 indexed companyId, address indexed company);

  function initialize(address _implementation) public initializer {
    __AccessControl_init();
    __UUPSUpgradeable_init();

    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);

    // Deploy the beacon with initial implementation
    companyBeacon = new UpgradeableBeacon(_implementation, address(this));

    // Transfer ownership of the beacon to the hub
    companyBeacon.transferOwnership(msg.sender);
  }

  /// @notice Adds a new company
  /// @param _admin The address of the admin for the company
  function addCompany(address _admin) public returns (LinkStateCompany) {
    BeaconProxy proxy = new BeaconProxy(
      address(companyBeacon),
      abi.encodeWithSelector(LinkStateCompany.initialize.selector, _admin)
    );

    LinkStateCompany company = LinkStateCompany(payable(address(proxy)));

    uint256 companyId = nextCompanyId++;

    companies[companyId] = CompanyConfig({admin: _admin, company: company});

    emit CompanyAdded(companyId, address(company));

    return company;
  }

  /// @notice Gets all companies
  /// @return companyList Array of company addresses
  function getCompanies() public view returns (LinkStateCompany[] memory) {
    uint256 count = nextCompanyId;
    LinkStateCompany[] memory companyList = new LinkStateCompany[](count);

    for (uint256 i = 0; i < count; i++) {
      companyList[i] = companies[i].company;
    }

    return companyList;
  }

  /// @notice Gets a company by ID
  /// @param companyId The ID of the company to retrieve
  /// @return CompanyConfig The company configuration
  function getCompanyById(
    uint256 companyId
  ) public view returns (CompanyConfig memory) {
    return companies[companyId];
  }

  function _authorizeUpgrade(
    address newImplementation
  ) internal virtual override onlyRole(DEFAULT_ADMIN_ROLE) {}
}
