// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CryptoResume is ERC721, Ownable {
  constructor() ERC721("Crypto Resume", "CR") Ownable(msg.sender) {}
}
