import { StyleProp, ViewStyle, View } from 'react-native'
import {
  useEthAddress,
  shortenAddress,
  AbstractConnector,
} from '@roll-network/web3'
import { Body, Button, Spinner } from '../../atoms'
import { useTheme } from '../../hooks'
import { container, padding } from '../../styles'
import { Dropdown } from '../dropdown'
import { AccountDropdown } from '../accountDropdown'

export type HandleWeb3Connect = (c: AbstractConnector) => void

export type ConnectWeb3ButtonProps = {
  buttonStyle?: StyleProp<ViewStyle> // TODO define type properly
  onPress: () => void
  activity?: boolean
}

export const ConnectWeb3Button = ({
  buttonStyle,
  onPress,
  activity,
}: ConnectWeb3ButtonProps) => {
  const address = useEthAddress()
  const theme = useTheme()

  if (activity) {
    return (
      <View
        style={[
          container.alignCenter,
          container.justifyCenter,
          container.fullHeight,
          padding.p4,
        ]}
      >
        <Spinner />
      </View>
    )
  }

  if (address) {
    return (
      <Dropdown
        renderDropdown={() => <AccountDropdown onSwitchAccounts={onPress} />}
      >
        <View
          style={[
            container.row,
            padding.p8,
            container.borderRadius,
            { backgroundColor: theme.background.page },
          ]}
        >
          <Body>{shortenAddress(address)}</Body>
        </View>
      </Dropdown>
    )
  }

  return (
    <Button
      style={buttonStyle}
      variant="primary"
      title="Connect Wallet"
      onPress={onPress}
    />
  )
}
