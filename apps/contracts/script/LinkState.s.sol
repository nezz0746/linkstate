// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {BaseScript, console2} from "./Base.s.sol";
import {LinkStateProfile} from "../src/LinkStateProfile.sol";
import {UUPSProxy} from "../src/UUPSProxy.sol";
import {LinkState} from "../src/LinkState.sol";
import {LinkStateCompany} from "../src/LinkStateCompany.sol";

contract LinkStateScript is BaseScript {
  address public eas = 0x4200000000000000000000000000000000000021;

  function deployLinkState(DeployementChain chain) public broadcastOn(chain) {
    LinkStateProfile linkStateProfile = LinkStateProfile(
      address(
        new UUPSProxy(
          address(new LinkStateProfile()),
          abi.encodeCall(
            LinkStateProfile.initialize,
            ("https://linkstate.vercel.app/api/metadata/profile/")
          )
        )
      )
    );

    LinkStateCompany linkStateCompany = new LinkStateCompany(eas);

    LinkState linkState = LinkState(
      address(
        new UUPSProxy(
          address(new LinkState()),
          abi.encodeCall(LinkState.initialize, (address(linkStateCompany)))
        )
      )
    );

    _saveDeployment(address(linkStateProfile), "LinkStateProfile");
    _saveDeployment(address(linkState), "LinkState");
  }
}
