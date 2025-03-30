// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {BaseScript, console2} from "./Base.s.sol";
import {CryptoResume} from "../src/CryptoResume.sol";

contract CryptoResumeScript is BaseScript {
  function deployCryptoResume(
    DeployementChain chain
  ) public broadcastOn(chain) {
    CryptoResume cryptoResume = new CryptoResume();

    _saveDeployment(address(cryptoResume), "CryptoResume");
  }
}
