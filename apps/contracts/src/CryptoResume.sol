// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract CryptoResume {
  string public name;

  constructor() {
    name = "Crypto Resume";
  }

  function getName() public view returns (string memory) {
    return name;
  }
}
