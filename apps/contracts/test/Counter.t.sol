// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {CryptoResume} from "../src/CryptoResume.sol";

contract CryptoResumeTest is Test {
  CryptoResume cryptoResume;

  function setUp() public {
    vm.createSelectFork("base");

    cryptoResume = new CryptoResume();
  }
}
