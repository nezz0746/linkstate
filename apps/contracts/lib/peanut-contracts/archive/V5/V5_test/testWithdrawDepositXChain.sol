// SPDX-License-Identifier:
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../../src/V5/PeanutV5.sol";

import "../../src/util/ERC20Mock.sol";
import "../../src/util/ERC721Mock.sol";
import "../../src/util/ERC1155Mock.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

interface IPeanutV5 {
    function withdrawDepositXChain(
        uint256 _index,
        address _recipientAddress,
        bytes calldata _squidData,
        uint256 _squidValue,
        address _squidRouter,
        bytes32 _hash,
        bytes calldata _signature
    ) external payable returns (bool);
}

// contract TestClaimXChainForked is Test {
//     IPeanutV5 public peanutV5;

//     function setUp() public {
//         console.log("Setting up test");
//         console.log("Forking...");
//         goerliFork = vm.createFork("https://ethereum-goerli.publicnode.com");
//         vm.selectFork(goerliFork);
//         peanutV5 = IPeanutV5(0x545CF0B176573A9fC334ff5b358A834559a72a70); // replace 0xYourContractAddress with your contract's address
//     }

//     function testClaimXChain() public {
//         uint256 depositIndex = 28;
//         address recipientAddress = 0x6B3751c5b04Aa818EA90115AA06a4D9A36A16f02;
//         bytes memory squidData =
//             hex"846a1bc6000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000004563918244f4000000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000340000000000000000000000000000000000000000000000000000000000000038000000000000000000000000000000000000000000000000000000000000003c000000000000000000000000000000000000000000000000000000000000004200000000000000000000000006b3751c5b04aa818ea90115aa06a4d9a36a16f0200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000000e47ff36ab500000000000000000000000000000000000000000000000000000000390fc13d0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000481a2aae41cd34832ddcf5a79404538bb2c02bc80000000000000000000000000000000000000000000000000000018bb45a17ac0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000b4fbf271143f4fbf7b91a5ded31805e42b2208d6000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005615553444300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000056c696e6561000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a307834383141324141453431636433343833326444434635413739343034353338626232633032624338000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bc000000000000000000000000000000000000000000000000000000000000000400000000000000000000000006b3751c5b04aa818ea90115aa06a4d9a36a16f02000000000000000000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000003600000000000000000000000000000000000000000000000000000000000000580000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000009200000000000000000000000000000000000000000000000000000000000000a8000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000044095ea7b30000000000000000000000006aa397cab00a2a40025dbf839a83f16d5ec7c1eb0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000006aa397cab00a2a40025dbf839a83f16d5ec7c1eb000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000000e404e45aaf000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b5860680000000000000000000000000000000000000000000000000000000000000bb8000000000000000000000000d9b7849d3a49e287c8e448cea0aae852861c4545000000000000000000000000000000000000000000000000000000003c16851c00000000000000000000000000000000000000000000000000000001fe3a15960000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a00000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000001000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b586068000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000044095ea7b30000000000000000000000006aa397cab00a2a40025dbf839a83f16d5ec7c1eb0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b586068000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000006aa397cab00a2a40025dbf839a83f16d5ec7c1eb000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000000e404e45aaf000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b5860680000000000000000000000002c1b868d6596a18e32e61b901e4060c872647b6c00000000000000000000000000000000000000000000000000000000000001f4000000000000000000000000d9b7849d3a49e287c8e448cea0aae852861c4545000000000000000000000000000000000000000000000000000000021a6c174000000000000000000000000000000000000000000000000000031c125d8d0ba40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b586068000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000010000000000000000000000002c1b868d6596a18e32e61b901e4060c872647b6c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000242e1a7d4d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000002c1b868d6596a18e32e61b901e4060c872647b6c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000006b3751c5b04aa818ea90115aa06a4d9a36a16f02000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
//         uint256 squidValue = 5000042753472144427;
//         address squidRouter = 0x481A2AAE41cd34832dDCF5A79404538bb2c02bC8;
//         bytes32 hash = 0x0c5da86e80b6d9de9037d540e5afbbdc03d61035d63287ce665a9934909d97df;
//         bytes memory signature =
//             hex"0c00220b49fb15f44f1953d97321babdf7e793eb98989efd8d2f4a76cb02893f00f79172929fbe5745e7b5eeef9cf348cf21dd8c655a47d45743d3ff4f3c21901b";

//         // Call the claim function
//         console.log("Calling claim function");
//         bool success = peanutV5.withdrawDepositXChain{value: 0x66e251852400}(
//             depositIndex, recipientAddress, squidData, squidValue, squidRouter, hash, signature
//         );
//         console.log("Claim function called");
//         console.log("Success: %s", success);
//     }
// }

contract TestClaimXChainNonForked is Test {
    address public constant SENDER_ADDRESS = address(0xaBC5211D86a01c2dD50797ba7B5b32e3C1167F9f);
    address public constant PUBKEY20 = address(0xaBC5211D86a01c2dD50797ba7B5b32e3C1167F9f);
    bytes32 public constant PRIVKEY = 0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;
    uint256 public constant DEPOSIT_AMOUNT = 1000000000000000000;

    receive() external payable {}

    PeanutV5 public peanutV5;

    function setUp() public {
        console.log("Setting up test TestClaimXChainNonForked");
        peanutV5 = new PeanutV5(address(0));

        peanutV5.makeDeposit{value: DEPOSIT_AMOUNT}(SENDER_ADDRESS, 0, DEPOSIT_AMOUNT, 0, PUBKEY20);
    }

    // function testClaimXChain() public {
    //     return;
    //     // TODO: reenable
    //     // uint256 depositIndex = 0;
    //     // address recipientAddress = 0x6B3751c5b04Aa818EA90115AA06a4D9A36A16f02;
    //     // bytes memory squidData =
    //     //     hex"846a1bc6000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000004563918244f4000000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000340000000000000000000000000000000000000000000000000000000000000038000000000000000000000000000000000000000000000000000000000000003c000000000000000000000000000000000000000000000000000000000000004200000000000000000000000006b3751c5b04aa818ea90115aa06a4d9a36a16f0200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000000e47ff36ab500000000000000000000000000000000000000000000000000000000390fc13d0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000481a2aae41cd34832ddcf5a79404538bb2c02bc80000000000000000000000000000000000000000000000000000018bb45a17ac0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000b4fbf271143f4fbf7b91a5ded31805e42b2208d6000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005615553444300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000056c696e6561000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a307834383141324141453431636433343833326444434635413739343034353338626232633032624338000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bc000000000000000000000000000000000000000000000000000000000000000400000000000000000000000006b3751c5b04aa818ea90115aa06a4d9a36a16f02000000000000000000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000003600000000000000000000000000000000000000000000000000000000000000580000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000009200000000000000000000000000000000000000000000000000000000000000a8000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000044095ea7b30000000000000000000000006aa397cab00a2a40025dbf839a83f16d5ec7c1eb0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000006aa397cab00a2a40025dbf839a83f16d5ec7c1eb000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000000e404e45aaf000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b5860680000000000000000000000000000000000000000000000000000000000000bb8000000000000000000000000d9b7849d3a49e287c8e448cea0aae852861c4545000000000000000000000000000000000000000000000000000000003c16851c00000000000000000000000000000000000000000000000000000001fe3a15960000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a00000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000001000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b586068000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000044095ea7b30000000000000000000000006aa397cab00a2a40025dbf839a83f16d5ec7c1eb0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b586068000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000006aa397cab00a2a40025dbf839a83f16d5ec7c1eb000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000000e404e45aaf000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b5860680000000000000000000000002c1b868d6596a18e32e61b901e4060c872647b6c00000000000000000000000000000000000000000000000000000000000001f4000000000000000000000000d9b7849d3a49e287c8e448cea0aae852861c4545000000000000000000000000000000000000000000000000000000021a6c174000000000000000000000000000000000000000000000000000031c125d8d0ba40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b586068000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000010000000000000000000000002c1b868d6596a18e32e61b901e4060c872647b6c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000242e1a7d4d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000002c1b868d6596a18e32e61b901e4060c872647b6c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000006b3751c5b04aa818ea90115aa06a4d9a36a16f02000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
    //     // uint256 squidValue = 5000042753472144427;
    //     // address squidRouter = 0x481A2AAE41cd34832dDCF5A79404538bb2c02bC8;
    //     // bytes32 hash = 0x0c5da86e80b6d9de9037d540e5afbbdc03d61035d63287ce665a9934909d97df;
    //     // bytes memory signature =
    //     //     hex"f0a194e979ce719a2d368ba9296db3246b479b725454cb03465a0361526c10b47e6d4532c1ed594bbf5ff9873dd4b6e1826d13feb29702c0347e6c39f800ce721c";

    //     // // Call the claim function
    //     // console.log("Calling claim function");
    //     // bool success = peanutV5.withdrawDepositXChain{value: 5000042753472144427}(
    //     //     depositIndex, recipientAddress, squidData, squidValue, squidRouter, hash, signature
    //     // );
    //     // console.log("Claim function called");
    //     // console.log("Success: %s", success);
    // }
}
