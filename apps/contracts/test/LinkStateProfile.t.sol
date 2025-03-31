// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {LinkStateProfile} from "../src/LinkStateProfile.sol";

contract LinkStateProfileTest is Test {
  LinkStateProfile public profile;
  address public owner;
  address public alice;
  address public bob;
  address public charlie;

  event ProfileCreated(uint256 indexed profileId, address indexed owner);
  event MessageSent(
    uint256 indexed messageId,
    address indexed from,
    uint256 indexed toProfileId
  );
  event FeesWithdrawn(uint256 amount);

  function setUp() public {
    owner = makeAddr("owner");
    alice = makeAddr("alice");
    bob = makeAddr("bob");
    charlie = makeAddr("charlie");

    vm.startPrank(owner);
    profile = new LinkStateProfile();
    profile.initialize("https://api.linkstate.xyz/metadata/");
    vm.stopPrank();

    // Give test accounts some ETH
    vm.deal(alice, 10 ether);
    vm.deal(bob, 10 ether);
    vm.deal(charlie, 10 ether);
  }

  function test_Initialize() public {
    assertEq(profile.name(), "LinkState Profile");
    assertEq(profile.symbol(), "LSP");
    assertEq(profile.owner(), owner);
    assertEq(profile.baseURI(), "https://api.linkstate.xyz/metadata/");
    assertEq(profile.messageCount(), 0);
  }

  function test_Mint() public {
    vm.prank(alice);
    vm.expectEmit(true, true, false, false);
    emit ProfileCreated(1, alice);
    profile.mint(alice);

    assertEq(profile.balanceOf(alice), 1);
    assertEq(profile.ownerOf(1), alice);

    // Check default profile values
    (string memory cid, uint256 messagePrice) = profile.profiles(1);
    assertEq(cid, "");
    assertEq(messagePrice, profile.MIN_MESSAGE_PRICE());
  }

  function test_MintLimit() public {
    vm.startPrank(alice);
    profile.mint(alice);

    vm.expectRevert("LinkStateProfile: Mint limit reached");
    profile.mint(alice);
    vm.stopPrank();
  }

  function test_NonTransferable() public {
    vm.prank(alice);
    profile.mint(alice);

    vm.prank(alice);
    vm.expectRevert("LinkStateProfile: Profiles are non-transferable");
    profile.transferFrom(alice, bob, 1);
  }

  function test_UpdateProfile() public {
    vm.prank(alice);
    profile.mint(alice);

    string memory newCid = "QmNewProfileCID";
    vm.prank(alice);
    profile.updateProfile(1, newCid);

    (string memory cid, ) = profile.profiles(1);
    assertEq(cid, newCid);
  }

  function test_UpdateProfile_OnlyOwner() public {
    vm.prank(alice);
    profile.mint(alice);

    vm.prank(bob);
    vm.expectRevert("LinkStateProfile: Not profile owner");
    profile.updateProfile(1, "QmNewProfileCID");
  }

  function test_UpdateMessagePrice() public {
    vm.prank(alice);
    profile.mint(alice);

    uint256 newPrice = 0.001 ether;
    vm.prank(alice);
    profile.updateMessagePrice(1, newPrice);

    (, uint256 messagePrice) = profile.profiles(1);
    assertEq(messagePrice, newPrice);
  }

  function test_UpdateMessagePrice_BelowMinimum() public {
    vm.prank(alice);
    profile.mint(alice);

    vm.prank(alice);
    vm.expectRevert("LinkStateProfile: Price below minimum");
    profile.updateMessagePrice(1, 0.00001 ether);
  }

  function test_SendMessage() public {
    vm.prank(alice);
    profile.mint(alice);

    uint256 payment = 0.0001 ether;
    uint256 aliceBalanceBefore = alice.balance;
    uint256 bobBalanceBefore = bob.balance;

    vm.prank(bob);
    vm.expectEmit(true, true, true, true);
    emit MessageSent(1, bob, 1);
    profile.sendMessage{value: payment}(1, "");

    // Calculate expected amounts
    uint256 protocolFee = (payment * profile.PROTOCOL_FEE_BPS()) / 10000;
    uint256 recipientPayment = payment - protocolFee;

    assertEq(alice.balance, aliceBalanceBefore + recipientPayment);
    assertEq(bob.balance, bobBalanceBefore - payment);
    assertEq(profile.messageCount(), 1);
  }

  function test_SendMessage_InsufficientPayment() public {
    vm.prank(alice);
    profile.mint(alice);

    // Set custom message price
    vm.prank(alice);
    profile.updateMessagePrice(1, 0.001 ether);

    vm.prank(bob);
    vm.expectRevert("LinkStateProfile: Insufficient payment");
    profile.sendMessage{value: 0.0001 ether}(1, "");
  }

  function test_SendMessage_NonexistentProfile() public {
    vm.prank(bob);
    vm.expectRevert(
      abi.encodeWithSignature("ERC721NonexistentToken(uint256)", 1)
    );
    profile.sendMessage{value: 0.0001 ether}(1, "");
  }

  function test_PaymentFailure() public {
    // Create a contract that rejects payments
    RejectPayments rejecter = new RejectPayments();

    vm.prank(address(rejecter));
    profile.mint(address(rejecter));

    vm.prank(bob);
    vm.expectRevert("LinkStateProfile: Payment failed");
    profile.sendMessage{value: 0.0001 ether}(1, "");
  }

  function test_SendMessage_WithFees() public {
    vm.prank(alice);
    profile.mint(alice);

    uint256 payment = 1 ether;
    uint256 expectedFee = (payment * profile.PROTOCOL_FEE_BPS()) / 10000; // 5%
    uint256 expectedPayment = payment - expectedFee;

    uint256 aliceBalanceBefore = alice.balance;
    uint256 bobBalanceBefore = bob.balance;

    vm.prank(bob);
    vm.expectEmit(true, true, true, true);
    emit MessageSent(1, bob, 1);
    profile.sendMessage{value: payment}(1, "");

    // Check balances
    assertEq(alice.balance, aliceBalanceBefore + expectedPayment);
    assertEq(bob.balance, bobBalanceBefore - payment);
    assertEq(profile.accumulatedFees(), expectedFee);
    assertEq(profile.messageCount(), 1);
  }

  function test_MessageIdIncrement() public {
    // Setup profiles
    vm.prank(alice);
    profile.mint(alice);
    vm.prank(bob);
    profile.mint(bob);

    // Send multiple messages and check IDs
    vm.startPrank(charlie);

    profile.sendMessage{value: 0.0001 ether}(1, "");
    assertEq(profile.messageCount(), 1);

    profile.sendMessage{value: 0.0001 ether}(2, "");
    assertEq(profile.messageCount(), 2);

    profile.sendMessage{value: 0.0001 ether}(1, "");
    assertEq(profile.messageCount(), 3);
    vm.stopPrank();
  }

  function test_WithdrawFees() public {
    // First create a profile and send a message to generate fees
    vm.prank(alice);
    profile.mint(alice);

    vm.prank(bob);
    profile.sendMessage{value: 1 ether}(1, "");

    uint256 expectedFee = (1 ether * profile.PROTOCOL_FEE_BPS()) / 10000;
    uint256 ownerBalanceBefore = owner.balance;

    vm.prank(owner);
    vm.expectEmit(true, true, true, true);
    emit FeesWithdrawn(expectedFee);
    profile.withdrawFees();

    assertEq(owner.balance, ownerBalanceBefore + expectedFee);
    assertEq(profile.accumulatedFees(), 0);
  }

  function test_WithdrawFees_OnlyOwner() public {
    vm.prank(alice);
    vm.expectRevert(
      abi.encodeWithSignature("OwnableUnauthorizedAccount(address)", alice)
    );
    profile.withdrawFees();
  }

  function test_WithdrawFees_NoFeesAvailable() public {
    vm.prank(owner);
    vm.expectRevert("LinkStateProfile: No fees to withdraw");
    profile.withdrawFees();
  }

  function test_WithdrawFees_MultipleMessages() public {
    // Setup profiles
    vm.prank(alice);
    profile.mint(alice);
    vm.prank(bob);
    profile.mint(bob);

    // Send multiple messages
    vm.prank(charlie);
    profile.sendMessage{value: 1 ether}(1, "");
    vm.prank(charlie);
    profile.sendMessage{value: 0.5 ether}(2, "");

    uint256 expectedFee = ((1 ether * profile.PROTOCOL_FEE_BPS()) / 10000) +
      ((0.5 ether * profile.PROTOCOL_FEE_BPS()) / 10000);

    uint256 ownerBalanceBefore = owner.balance;

    vm.prank(owner);
    profile.withdrawFees();

    assertEq(owner.balance, ownerBalanceBefore + expectedFee);
    assertEq(profile.accumulatedFees(), 0);
    assertEq(profile.messageCount(), 2);
  }

  receive() external payable {}
}

contract RejectPayments {
  function mint(LinkStateProfile profile) external {
    profile.mint(address(this));
  }

  // This contract rejects all payments
  receive() external payable {
    revert("Payment rejected");
  }
}
