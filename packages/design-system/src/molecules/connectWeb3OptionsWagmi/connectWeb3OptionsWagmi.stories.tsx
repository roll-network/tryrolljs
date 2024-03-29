import { Web3ProviderWagmi } from '@roll-network/web3'
import { ConnectWeb3OptionsWagmi } from '.'

const conf = {
  title: 'Design System/Molecules/ConnectWeb3OptionsWagmi',
  component: ConnectWeb3OptionsWagmi,
}

export const WebOptions = () => (
  <Web3ProviderWagmi
    variant="walletConnect"
    walletConnectProjectId={process.env.WALLET_CONNECT_PROJECT_ID as string}
  >
    <ConnectWeb3OptionsWagmi
      onClose={() => console.log('on close event')}
      onSelect={() => console.log('on select event')}
    />
  </Web3ProviderWagmi>
)

export default conf
