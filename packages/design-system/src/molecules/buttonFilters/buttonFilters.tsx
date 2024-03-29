import { View } from 'react-native'
import { container, margin } from '../../styles'
import { ButtonV2 } from '../../atoms'
import { ButtonFiltersProps } from './types'

const ButtonFilters = <F extends string>({
  options,
  onChange,
  value,
}: ButtonFiltersProps<F>) => {
  return (
    <View style={container.row}>
      {options.map((filterOption, index) => (
        <ButtonV2
          key={filterOption.value}
          style={index !== 0 && margin.ml8}
          onPress={() => onChange(filterOption)}
          variant={value === filterOption.value ? 'primary' : 'secondary'}
          title={filterOption.title}
          size="small"
        />
      ))}
    </View>
  )
}

export default ButtonFilters
