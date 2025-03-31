// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test} from "forge-std/Test.sol";
import {MockLinkStateCompany} from "./mocks/MockLinkStateCompany.sol";
import {MockEAS, IEAS} from "./mocks/MockEAS.sol";
import {Attestation} from "@eas/IEAS.sol";
import {LinkState} from "../src/LinkState.sol";
import {UUPSProxy} from "../src/UUPSProxy.sol";

contract LinkStateCompanyTest is Test {
  MockLinkStateCompany public company;
  MockEAS public eas;
  address public admin;
  address public hrManager;
  address public employee;
  LinkState linkState;

  function setUp() public {
    admin = makeAddr("admin");
    hrManager = makeAddr("hrManager");
    employee = makeAddr("employee");

    // Deploy mock EAS
    eas = new MockEAS();

    // Deploy company
    company = new MockLinkStateCompany(address(eas));

    // Deploy link state
    vm.startPrank(admin);
    linkState = LinkState(
      address(
        new UUPSProxy(
          address(new LinkState()),
          abi.encodeWithSelector(
            LinkState.initialize.selector,
            address(company)
          )
        )
      )
    );

    // Deploy company
    company = MockLinkStateCompany(
      payable(address(linkState.addCompany(admin)))
    );

    company.grantRole(company.HR_ROLE(), hrManager);

    vm.stopPrank();
  }

  function test_Initialize() public {
    assertTrue(company.hasRole(company.DEFAULT_ADMIN_ROLE(), admin));
    assertTrue(company.hasRole(company.HR_ROLE(), admin));
  }

  function test_OnAttest_HrOnly() public {
    Attestation memory attestation = Attestation({
      uid: bytes32(0),
      schema: bytes32(0),
      time: uint64(block.timestamp),
      expirationTime: uint64(0),
      revocationTime: uint64(0),
      refUID: bytes32(0),
      recipient: employee,
      attester: hrManager,
      revocable: true,
      data: bytes("")
    });

    // Should succeed with HR role
    vm.prank(address(admin));
    assertTrue(company.mockOnAttest(attestation, 0));

    // Verify employee got alumni role
    assertTrue(company.hasRole(company.ALUMNI_ROLE(), employee));
  }

  function test_OnAttest_NonHr() public {
    address nonHr = makeAddr("nonHr");
    Attestation memory attestation = Attestation({
      uid: bytes32(0),
      schema: bytes32(0),
      time: uint64(block.timestamp),
      expirationTime: uint64(0),
      revocationTime: uint64(0),
      refUID: bytes32(0),
      recipient: employee,
      attester: nonHr,
      revocable: true,
      data: bytes("")
    });

    // Should fail without HR role
    vm.prank(address(admin));
    vm.expectRevert("LinkStateCompany: Only HR can attest");
    company.mockOnAttest(attestation, 0);

    // Verify employee did not get alumni role
    assertFalse(company.hasRole(company.ALUMNI_ROLE(), employee));
  }

  function test_OnRevoke() public {
    // First attest
    Attestation memory attestation = Attestation({
      uid: bytes32(0),
      schema: bytes32(0),
      time: uint64(block.timestamp),
      expirationTime: uint64(0),
      revocationTime: uint64(0),
      refUID: bytes32(0),
      recipient: employee,
      attester: hrManager,
      revocable: true,
      data: bytes("")
    });

    vm.prank(address(admin));
    company.mockOnAttest(attestation, 0);
    assertTrue(company.hasRole(company.ALUMNI_ROLE(), employee));

    // Then revoke
    vm.prank(address(admin));
    company.mockOnRevoke(attestation, 0);
    assertFalse(company.hasRole(company.ALUMNI_ROLE(), employee));
  }
}
