import { useEffect, useMemo, useRef } from 'react'
import { Animated, Pressable, View } from 'react-native'
import { container, makeStyles } from '../../styles'
import { useThemeV2 } from '../../hooks'

const CONTAINER_PADDING = 2
const CONTAINER_WIDTH = 36
const CONTAINER_HEIGHT = 18
const THUMB_SIZE = 14
const THUMB_CHECKED_POSITION = 18

export interface SwitchProps {
  checked: boolean
  onPress: () => void
  testID?: string
  disabled?: boolean
}

const useTrackBackgroundColor = (checked: boolean, disabled?: boolean) => {
  const theme = useThemeV2()
  if (checked) {
    return disabled ? theme.base.primary[20] : theme.base.primary[100]
  }
  return theme.base.primary[10]
}

const useThumbBackgroundColor = (checked: boolean, disabled?: boolean) => {
  const theme = useThemeV2()
  if (disabled) {
    return checked ? theme.base.primary[20] : theme.base.primary[10]
  }
  return theme.background.white
}

const useStyles = (checked: boolean, disabled?: boolean) => {
  const trackBackgroundColor = useTrackBackgroundColor(checked, disabled)
  const thumbBackgroundColor = useThumbBackgroundColor(checked, disabled)
  const styles = useMemo(
    () =>
      makeStyles({
        container: {
          padding: CONTAINER_PADDING,
          width: CONTAINER_WIDTH,
          height: CONTAINER_HEIGHT,
          backgroundColor: trackBackgroundColor,
        },
        thumb: {
          width: THUMB_SIZE,
          height: THUMB_SIZE,
          borderRadius: THUMB_SIZE / 2,
          backgroundColor: thumbBackgroundColor,
        },
      }),
    [trackBackgroundColor, thumbBackgroundColor],
  )
  return styles
}

export const Switch = ({ checked, onPress, testID, disabled }: SwitchProps) => {
  const styles = useStyles(checked, disabled)

  const position = useRef(
    new Animated.Value(checked ? THUMB_CHECKED_POSITION : 0),
  ).current

  const handlePress = () => {
    if (!disabled) {
      onPress()
    }
  }

  useEffect(() => {
    Animated.timing(position, {
      toValue: checked ? THUMB_CHECKED_POSITION : 0,
      duration: 200,
      useNativeDriver: true,
    }).start()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked])

  return (
    <Pressable onPress={handlePress} testID={testID}>
      <View style={[container.borderRadius2XL, styles.container]}>
        <Animated.View
          style={[
            styles.thumb,
            {
              transform: [
                {
                  translateX: position,
                },
              ],
            },
          ]}
        />
      </View>
    </Pressable>
  )
}
