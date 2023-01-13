import * as React from 'react'
import { Web3ProviderWagmi } from '../../providers'

const withWeb3ProviderWagmi = (component: React.ReactElement) => (
  <Web3ProviderWagmi>{component}</Web3ProviderWagmi>
)

export default withWeb3ProviderWagmi
