/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { TokenFactory, TokenFactoryInterface } from "../TokenFactory";

const _abi = [
  {
    type: "event",
    anonymous: false,
    name: "LogTokenCreated",
    inputs: [
      {
        type: "string",
        name: "name",
        indexed: false,
      },
      {
        type: "string",
        name: "symbol",
        indexed: false,
      },
      {
        type: "address",
        name: "token",
        indexed: true,
      },
      {
        type: "address",
        name: "vestingBeneficiary",
        indexed: false,
      },
    ],
  },
  {
    type: "event",
    anonymous: false,
    name: "OwnershipTransferred",
    inputs: [
      {
        type: "address",
        name: "previousOwner",
        indexed: true,
      },
      {
        type: "address",
        name: "newOwner",
        indexed: true,
      },
    ],
  },
  {
    type: "function",
    name: "TokenVestingInstance",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [
      {
        type: "address",
      },
    ],
  },
  {
    type: "function",
    name: "calculateProportions",
    constant: true,
    stateMutability: "pure",
    payable: false,
    inputs: [
      {
        type: "uint256",
        name: "_totalSupply",
      },
      {
        type: "uint8",
        name: "_initialPercentage",
      },
      {
        type: "uint8",
        name: "_initialPlatformPercentage",
      },
      {
        type: "uint8",
        name: "_referralPercentage",
      },
    ],
    outputs: [
      {
        type: "uint256[4]",
        name: "proportions",
      },
    ],
  },
  {
    type: "function",
    name: "createToken",
    constant: false,
    payable: false,
    inputs: [
      {
        type: "string",
        name: "_name",
      },
      {
        type: "string",
        name: "_symbol",
      },
      {
        type: "uint8",
        name: "_decimals",
      },
      {
        type: "uint256",
        name: "_totalSupply",
      },
      {
        type: "uint8",
        name: "_initialPercentage",
      },
      {
        type: "uint256",
        name: "_vestingPeriodInDays",
      },
      {
        type: "address",
        name: "_vestingBeneficiary",
      },
      {
        type: "uint8",
        name: "_initialPlatformPercentage",
      },
      {
        type: "address",
        name: "_referral",
      },
      {
        type: "uint8",
        name: "_referralPercentage",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "token",
      },
    ],
  },
  {
    type: "function",
    name: "getTokenVesting",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [
      {
        type: "address",
      },
    ],
  },
  {
    type: "function",
    name: "initialize",
    constant: false,
    payable: false,
    inputs: [
      {
        type: "address",
        name: "_tokenVesting",
      },
      {
        type: "address",
        name: "_rollWallet",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "migrateTokenFactory",
    constant: false,
    payable: false,
    inputs: [
      {
        type: "address",
        name: "_newTokenFactory",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "owner",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [
      {
        type: "address",
      },
    ],
  },
  {
    type: "function",
    name: "renounceOwnership",
    constant: false,
    payable: false,
    inputs: [],
    outputs: [],
  },
  {
    type: "function",
    name: "rollWallet",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [
      {
        type: "address",
      },
    ],
  },
  {
    type: "function",
    name: "scalePercentages",
    constant: true,
    stateMutability: "pure",
    payable: false,
    inputs: [
      {
        type: "uint8",
        name: "p0",
      },
      {
        type: "uint8",
        name: "p1",
      },
      {
        type: "uint8",
        name: "p2",
      },
    ],
    outputs: [
      {
        type: "uint256[3]",
        name: "proportions",
      },
    ],
  },
  {
    type: "function",
    name: "setPlatformWallet",
    constant: false,
    payable: false,
    inputs: [
      {
        type: "address",
        name: "_newPlatformWallet",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "setTokenVesting",
    constant: false,
    payable: false,
    inputs: [
      {
        type: "address",
        name: "_newTokenVesting",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "setVestingAddress",
    constant: false,
    payable: false,
    inputs: [
      {
        type: "address",
        name: "_vestingBeneficiary",
      },
      {
        type: "address",
        name: "_token",
      },
      {
        type: "address",
        name: "_newVestingBeneficiary",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "setVestingReferral",
    constant: false,
    payable: false,
    inputs: [
      {
        type: "address",
        name: "_vestingBeneficiary",
      },
      {
        type: "address",
        name: "_token",
      },
      {
        type: "address",
        name: "_vestingReferral",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "transferOwnership",
    constant: false,
    payable: false,
    inputs: [
      {
        type: "address",
        name: "newOwner",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "validateTokenVestingOwner",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [
      {
        type: "address",
        name: "a1",
      },
      {
        type: "address",
        name: "a2",
      },
    ],
    outputs: [],
  },
];

export class TokenFactory__factory {
  static readonly abi = _abi;
  static createInterface(): TokenFactoryInterface {
    return new utils.Interface(_abi) as TokenFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenFactory {
    return new Contract(address, _abi, signerOrProvider) as TokenFactory;
  }
}
