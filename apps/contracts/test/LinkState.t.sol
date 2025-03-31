// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test} from "forge-std/Test.sol";
import {LinkState} from "../src/LinkState.sol";
import {LinkStateCompany} from "../src/LinkStateCompany.sol";
import {MockEAS, IEAS} from "./mocks/MockEAS.sol";
import {UUPSProxy} from "../src/UUPSProxy.sol";
import {MockLinkStateCompany} from "./mocks/MockLinkStateCompany.sol";
import {UpgradeableBeacon} from "@openzeppelin/contracts/proxy/beacon/UpgradeableBeacon.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract LinkStateTest is Test {
  MockEAS public eas;
  address public admin;
  address public companyAdmin;
  address public user;
  address public hrManager;
  LinkState public linkState;

  event CompanyAdded(uint256 indexed companyId, address indexed company);

  function setUp() public {
    admin = makeAddr("admin");
    companyAdmin = makeAddr("companyAdmin");
    user = makeAddr("user");
    hrManager = makeAddr("hrManager");

    // Deploy mock EAS
    eas = new MockEAS();

    // Deploy link state
    vm.startPrank(admin);
    linkState = LinkState(
      address(
        new UUPSProxy(
          address(new LinkState()),
          abi.encodeWithSelector(
            LinkState.initialize.selector,
            address(new MockLinkStateCompany(address(eas)))
          )
        )
      )
    );

    vm.stopPrank();
  }

  function test_Initialize() public {
    assertTrue(linkState.hasRole(linkState.DEFAULT_ADMIN_ROLE(), admin));
  }

  function test_AddCompany() public {
    vm.startPrank(admin);

    LinkStateCompany c = linkState.addCompany(companyAdmin);

    LinkState.CompanyConfig memory config = linkState.getCompanyById(0);
    assertEq(config.admin, companyAdmin);
    assertEq(address(config.company), address(c));

    // Verify company was properly initialized
    assertTrue(c.hasRole(c.DEFAULT_ADMIN_ROLE(), companyAdmin));

    vm.stopPrank();
  }

  function test_GetCompanies() public {
    vm.startPrank(admin);

    // Add multiple companies
    LinkStateCompany company1 = linkState.addCompany(companyAdmin);
    LinkStateCompany company2 = linkState.addCompany(makeAddr("companyAdmin2"));

    LinkStateCompany[] memory companies = linkState.getCompanies();
    assertEq(companies.length, 2);
    assertEq(address(companies[0]), address(company1));
    assertEq(address(companies[1]), address(company2));

    vm.stopPrank();
  }

  function test_GetCompanyById() public {
    vm.startPrank(admin);

    LinkStateCompany company = linkState.addCompany(companyAdmin);

    LinkState.CompanyConfig memory config = linkState.getCompanyById(0);
    assertEq(config.admin, companyAdmin);
    assertEq(address(config.company), address(company));

    vm.stopPrank();
  }

  // Upgradeability tests
  function test_UpgradeBeacon() public {
    // Deploy new implementation
    LinkStateCompany newImplementation = new LinkStateCompany(address(eas));

    vm.startPrank(admin);

    // Upgrade beacon
    linkState.companyBeacon().upgradeTo(address(newImplementation));

    // Verify upgrade
    assertEq(
      linkState.companyBeacon().implementation(),
      address(newImplementation)
    );

    vm.stopPrank();
  }

  function test_UpgradeBeacon_OnlyOwner() public {
    LinkStateCompany newImplementation = new LinkStateCompany(address(eas));

    UpgradeableBeacon beacon = linkState.companyBeacon();
    // Test that non-owner cannot upgrade
    vm.prank(user);
    vm.expectRevert(
      abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, user)
    );
    beacon.upgradeTo(address(newImplementation));

    // Test that owner can upgrade
    vm.prank(admin);
    beacon.upgradeTo(address(newImplementation));

    // Verify upgrade was successful
    assertEq(beacon.implementation(), address(newImplementation));
  }
}
