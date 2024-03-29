import { useState } from 'react'
import { fromTemplate } from '../../../.storybook/utils'
import { Switch, SwitchProps } from '.'

const storyConfig = {
  title: 'Design System/Atoms/Switch',
  component: Switch,
}
const Template = (props: SwitchProps) => {
  return <Switch {...props} />
}

export const Default = () => {
  const [checked, setChecked] = useState(false)
  const onPress = () => setChecked(!checked)
  return <Switch checked={checked} onPress={onPress} />
}

export const Disabled = fromTemplate(Template, {
  disabled: true,
  checked: false,
})

export default storyConfig
