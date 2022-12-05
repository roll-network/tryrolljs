/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface RollStakingFactoryInterface extends utils.Interface {
  functions: {
    "createStakingContract(address[],address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "registry()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createStakingContract" | "initialize" | "registry"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createStakingContract",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "createStakingContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;

  events: {
    "Deployed(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deployed"): EventFragment;
}

export interface DeployedEventObject {
  stakingContract: string;
}
export type DeployedEvent = TypedEvent<[string], DeployedEventObject>;

export type DeployedEventFilter = TypedEventFilter<DeployedEvent>;

export interface RollStakingFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RollStakingFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createStakingContract(
      _rewardTokens: PromiseOrValue<string>[],
      _stakedToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registry(overrides?: CallOverrides): Promise<[string]>;
  };

  createStakingContract(
    _rewardTokens: PromiseOrValue<string>[],
    _stakedToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _registry: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registry(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    createStakingContract(
      _rewardTokens: PromiseOrValue<string>[],
      _stakedToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      _registry: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    registry(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Deployed(address)"(stakingContract?: null): DeployedEventFilter;
    Deployed(stakingContract?: null): DeployedEventFilter;
  };

  estimateGas: {
    createStakingContract(
      _rewardTokens: PromiseOrValue<string>[],
      _stakedToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      _registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createStakingContract(
      _rewardTokens: PromiseOrValue<string>[],
      _stakedToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}