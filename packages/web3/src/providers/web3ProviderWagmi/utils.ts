import { Chain } from 'wagmi'
import {
  sepolia,
  hardhat,
  polygon,
  polygonMumbai,
  goerli,
  mainnet,
} from 'wagmi/chains'
import {
  CHAIN_ID_FORM_TESTNET,
  CHAIN_ID_FORM,
  CHAIN_ID_GOERLI,
  CHAIN_ID_HARDHAT,
  CHAIN_ID_MAIN_NET,
  CHAIN_ID_MUMBAI,
  CHAIN_ID_POLYGON,
  CHAIN_ID_SEPOLIA,
} from '../../connectors'
import { form, formTestnet } from './chains'

const MAP_CHAINS: Record<number, Chain> = {
  [CHAIN_ID_MAIN_NET]: mainnet,
  [CHAIN_ID_POLYGON]: polygon,
  [CHAIN_ID_GOERLI]: goerli,
  [CHAIN_ID_SEPOLIA]: sepolia,
  [CHAIN_ID_HARDHAT]: hardhat,
  [CHAIN_ID_MUMBAI]: polygonMumbai,
  [CHAIN_ID_FORM_TESTNET]: formTestnet,
  [CHAIN_ID_FORM]: form,
}

export const getChainsById = (chains: number[]) => {
  return chains.map((chain) => MAP_CHAINS[chain]).filter(Boolean) as Chain[]
}
