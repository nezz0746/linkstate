// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract LinkStateProfile is ERC721Upgradeable, OwnableUpgradeable {
  uint256 public price = 0 ether;
  uint256 public mintLimit = 1;
  uint256 public totalSupply = 0;
  string public baseURI;
  uint256 public constant MIN_MESSAGE_PRICE = 0.0001 ether;
  uint256 public constant PROTOCOL_FEE_BPS = 500; // 5% in basis points
  uint256 public accumulatedFees;

  struct Profile {
    string cid;
    uint256 messagePrice;
  }

  mapping(uint256 => Profile) public profiles;

  event MessageSent(
    address indexed from,
    uint256 indexed toProfileId,
    string content
  );

  event ProfileCreated(uint256 indexed profileId, address indexed owner);
  event FeesWithdrawn(uint256 amount);

  constructor() {}

  function initialize(string calldata _baseURI) public initializer {
    __ERC721_init("LinkState Profile", "LSP");
    __Ownable_init(msg.sender);
    baseURI = _baseURI;
  }

  function mint(address to) public payable {
    require(msg.value >= price, "LinkStateProfile: Insufficient funds");
    require(balanceOf(to) < mintLimit, "LinkStateProfile: Mint limit reached");

    totalSupply++;

    // Initialize profile with default message price
    profiles[totalSupply] = Profile("", MIN_MESSAGE_PRICE);

    _mint(to, totalSupply);

    emit ProfileCreated(totalSupply, to);
  }

  // Make profiles non-transferable
  function _transfer(
    address from,
    address to,
    uint256 tokenId
  ) internal virtual override {
    revert("LinkStateProfile: Profiles are non-transferable");
  }

  // Update profile CID
  function updateProfile(uint256 profileId, string calldata newCid) external {
    require(
      ownerOf(profileId) == msg.sender,
      "LinkStateProfile: Not profile owner"
    );
    profiles[profileId].cid = newCid;
  }

  // Update message price
  function updateMessagePrice(uint256 profileId, uint256 newPrice) external {
    require(
      ownerOf(profileId) == msg.sender,
      "LinkStateProfile: Not profile owner"
    );
    require(
      newPrice >= MIN_MESSAGE_PRICE,
      "LinkStateProfile: Price below minimum"
    );
    profiles[profileId].messagePrice = newPrice;
  }

  // Send message to profile
  function sendMessage(
    uint256 toProfileId,
    string calldata content
  ) external payable {
    _requireOwned(toProfileId);

    require(
      msg.value >= profiles[toProfileId].messagePrice,
      "LinkStateProfile: Insufficient payment"
    );

    // Calculate protocol fee (5%)
    uint256 protocolFee = (msg.value * PROTOCOL_FEE_BPS) / 10000;
    uint256 recipientPayment = msg.value - protocolFee;

    // Add fee to accumulated fees
    accumulatedFees += protocolFee;

    // Transfer payment to profile owner
    (bool success, ) = payable(ownerOf(toProfileId)).call{
      value: recipientPayment
    }("");
    require(success, "LinkStateProfile: Payment failed");

    emit MessageSent(msg.sender, toProfileId, content);
  }

  // Withdraw accumulated protocol fees
  function withdrawFees() external onlyOwner {
    uint256 amount = accumulatedFees;
    require(amount > 0, "LinkStateProfile: No fees to withdraw");

    accumulatedFees = 0;

    (bool success, ) = payable(owner()).call{value: amount}("");
    require(success, "LinkStateProfile: Fee withdrawal failed");

    emit FeesWithdrawn(amount);
  }
}
