import { View } from 'react-native'
import { fromTemplate } from '../../../.storybook/utils'
import { Select, SelectProps } from '.'

const storyConfig = {
  title: 'Design System/Molecules/Select',
  component: Select,
}

const Template = (props: SelectProps) => (
  // eslint-disable-next-line react-native/no-inline-styles
  <View style={{ maxWidth: 300 }}>
    <Select {...props} />
  </View>
)

export const Default = fromTemplate(Template, {
  placeholder: 'Select an option',
  options: [
    { name: 'Option #1', value: '1' },
    { name: 'Option #2', value: '2' },
    { name: 'Option #3', value: '3' },
  ],
})

export const WithDefaultValue = fromTemplate(Template, {
  placeholder: 'Select an option',
  defaultValue: '1',
  options: [
    { name: 'Option #1', value: '1' },
    { name: 'Option #2', value: '2' },
    { name: 'Option #3', value: '3' },
  ],
})

export const NoOptions = fromTemplate(Template, {
  placeholder: 'Select an option',
})

export default storyConfig
