import { useState } from 'react'
import { View } from 'react-native'
import { fromTemplate } from '../../../.storybook/utils'
import { container, margin, padding, spacing } from '../../styles'
import { lightTheme } from '../../styles/themeV2'
import { InputV2 } from '../inputV2'
import { TypographyV2 } from '../../atoms'
import { InputLayoutProps, InputLayout } from '.'

const storyConfig = {
  title: 'Design System/Molecules/InputLayout',
  component: InputLayout,
}

const Template = (props: InputLayoutProps) => {
  const [maxSupply, setMaxSupply] = useState('')
  const [referral, setReferral] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  return (
    <View style={[padding.p20, { gap: spacing[20] }]}>
      <InputLayout {...props}>
        <View style={container.fullWidth}>
          <InputV2
            label="Max supply"
            placeholder="this is the place holder"
            value={maxSupply}
            onChangeText={setMaxSupply}
          />
          <View style={[margin.mv8]} />
          <InputV2
            label="Referral (optional)"
            placeholder="Enter wallet address"
            value={referral}
            onChangeText={setReferral}
          />
        </View>
      </InputLayout>
      <InputLayout
        title="Title for a name"
        description="Small description for a name"
      >
        <View style={container.fullWidth}>
          <InputV2
            label="Name"
            placeholder="this is the name"
            value={name}
            onChangeText={setName}
          />
          <View style={[margin.mv8]} />
          <InputV2
            label="Last name"
            placeholder="This is the last name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
      </InputLayout>
    </View>
  )
}

export const Default = fromTemplate(Template, {
  title: 'Total token supply',
  description:
    'This is the total amount of tokens to be created. You can’t change the total supply once the token is created. Recommended supply: 10 million.',
})

export const WithComponentDescription = fromTemplate(Template, {
  title: 'Total token supply',
  description: (
    <TypographyV2 variant="text3">
      By default we use the connected Ethereum wallet address, but this can be
      any ERC20 wallet address.
      {'\n'}
      If you are a DAO, we recommend vesting to a multisig address. Don’t have
      one?{' '}
      <TypographyV2 variant="text3" color={lightTheme.base.highlight1}>
        Create one here on Gnosis Safe
      </TypographyV2>
    </TypographyV2>
  ),
})

export default storyConfig
