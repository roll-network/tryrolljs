import { View } from 'react-native'
import { titleBuilder } from '../../../.storybook/utils'
import { container, margin } from '../../styles'
import { RadioSelect } from '.'

const storyConfig = {
  title: titleBuilder.atoms('RadioSelect'),
  component: RadioSelect,
}

export const Default = () => (
  <View style={[container.halfWidth, margin.m20]}>
    <RadioSelect
      name="default"
      value="two"
      options={[
        { name: 'One', value: 'one' },
        { name: 'Two', value: 'two' },
        { name: 'Three', value: 'three' },
      ]}
    />
  </View>
)

export const WithDescriptions = () => (
  <View style={[container.halfWidth, margin.m20]}>
    <RadioSelect
      name="default"
      value="two"
      options={[
        {
          name: 'One',
          value: 'one',
          description: 'Here is the test description',
        },
        {
          name: 'Two',
          value: 'two',
          description: 'Here is the test description',
        },
        {
          name: 'Three',
          value: 'three',
          description: 'Here is the test description',
        },
      ]}
    />
  </View>
)

export default storyConfig