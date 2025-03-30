// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {BaseScript, console2} from "./Base.s.sol";
import {LinkStateProfile} from "../src/LinkStateProfile.sol";
import {UUPSProxy} from "../src/UUPSProxy.sol";

contract LinkStateScript is BaseScript {
  function deployLinkState(DeployementChain chain) public broadcastOn(chain) {
    LinkStateProfile linkStateProfile = LinkStateProfile(
      address(
        new UUPSProxy(
          address(new LinkStateProfile()),
          abi.encodeCall(
            LinkStateProfile.initialize,
            ("https://linkstate.vercel.app/metadata/profile/")
          )
        )
      )
    );

    _saveDeployment(address(linkStateProfile), "LinkStateProfile");
  }
}
