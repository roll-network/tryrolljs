import { useState } from 'react'
import {
  Dimensions,
  Platform,
  Pressable,
  ViewStyle,
  View,
  FlatList,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AnimatePresence, Motion } from '@legendapp/motion'
import { TypographyV2, Icon, ButtonV2 } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { container, layer, makeStyles, margin, padding } from '../../styles'
import { openLink } from '../../utils'
import { SidebarOptions } from '../sidebarOptions'
import { Web3Button } from '../web3Button'
import { SidebarFooterOptionProps, SidebarProps } from './types'

const DIVIDER_HEIGHT = 1

const styles = makeStyles({
  container: {
    flex: 1,
  },
  headerContainer: {
    zIndex: layer.layer100,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 16,
    top: 12,
  },
  menuContainer: {
    width: 290,
  },
})

export const MobileSidebar: React.FC<SidebarProps> = ({
  logo,
  suffix,
  withConnectWallet = false,
  header,
  footerOptionsOnMobile,
  sections,
  selectedOptionId,
}) => {
  const { top } = useSafeAreaInsets()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width
  const theme = useThemeV2()
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const isNative = Platform.OS !== 'web'

  const overlayStyles = {
    backgroundColor: 'rgba(0,0,0,0.6)',
    height,
    position: isNative ? 'absolute' : 'fixed',
  } as ViewStyle

  const headerStyles = {
    position: !isNative ? 'sticky' : 'relative',
    top: 0,
  } as ViewStyle

  const dividerStyles: ViewStyle = {
    borderBottomWidth: DIVIDER_HEIGHT,
    borderColor: theme.background.silver,
  }

  const showWeb3Button =
    !suffix?.mobile && !suffix?.mobileSidebar && withConnectWallet && !isNative

  return (
    <View
      style={[
        container.row,
        container.alignCenter,
        container.justifySpaceBetween,
        padding.pv8,
        padding.ph20,
        headerStyles,
        {
          backgroundColor: theme.background.white,
          zIndex: layer.layer100,
          marginTop: top,
        },
      ]}
    >
      {logo.mobileHeader}
      <View style={[container.row, container.alignCenter]}>
        {suffix?.mobile}
        {showWeb3Button && <Web3Button connectedVariant="avatar" />}

        <Motion.View
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{
            opacity: {
              type: 'timing',
              duration: 500,
            },
          }}
        >
          <Pressable style={[margin.ml16]} onPress={handleOpen}>
            <Icon
              variant="menu"
              width={32}
              height={32}
              color={theme.base.primary[100]}
            />
          </Pressable>
        </Motion.View>
      </View>

      <AnimatePresence>
        {isOpen && (
          <Motion.View
            initial={{ opacity: 0, x: width }}
            exit={{ opacity: 0, x: width }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              default: {
                type: 'spring',
              },
              opacity: {
                type: 'timing',
                duration: 500,
              },
            }}
            style={{
              position: Platform.select({
                web: 'fixed',
                default: 'absolute',
              }) as any,
              top: 0,
              left: 0,
              bottom: 0,
              zIndex: layer.layer101,
            }}
          >
            <Pressable
              testID="overlayContainer"
              style={[styles.container, overlayStyles, { width }]}
              onPress={handleClose}
            >
              <View style={[styles.closeIconContainer]} testID="iconContainer">
                <ButtonV2
                  onPress={handleClose}
                  variant="icon"
                  iconVariant="close"
                  title="close"
                  size="medium"
                  iconColor={theme.text.white[100]}
                  iconBackgroundColor={theme.base.primary[10]}
                />
              </View>
            </Pressable>
            <View
              style={[
                styles.menuContainer,
                {
                  backgroundColor: theme.background.white,
                  height,
                  maxWidth: width * 0.8,
                },
              ]}
            >
              <View
                style={[
                  padding.ph20,
                  padding.pv16,
                  dividerStyles,
                  {
                    marginTop: top,
                  },
                ]}
              >
                {logo.mobileSidebar}
              </View>
              <View style={[padding.pv24, padding.ph20, dividerStyles]}>
                {header && (
                  <View style={[styles.headerContainer, margin.mb24]}>
                    {header}
                  </View>
                )}
                <SidebarOptions
                  sections={sections}
                  selectedOptionId={selectedOptionId}
                />
                {suffix?.mobileSidebar}
                {showWeb3Button && (
                  <View
                    style={[
                      container.fullWidth,
                      container.justifyStart,
                      container.alignStart,
                      margin.mt24,
                    ]}
                  >
                    <Web3Button />
                  </View>
                )}
              </View>
              <View style={[padding.pv24, padding.ph20]}>
                <FlatList
                  scrollEnabled={false}
                  data={footerOptionsOnMobile}
                  keyExtractor={(item) => item.title}
                  // eslint-disable-next-line react/no-unstable-nested-components
                  ItemSeparatorComponent={() => <View style={[margin.mv8]} />}
                  renderItem={({ item }) => <FooterOption {...item} />}
                />
              </View>
            </View>
          </Motion.View>
        )}
      </AnimatePresence>
    </View>
  )
}

const FooterOption: React.FC<SidebarFooterOptionProps> = ({ title, link }) => {
  const theme = useThemeV2()
  const handlePress = () => {
    openLink(link, true)
  }
  return (
    <View>
      <Pressable onPress={handlePress}>
        <TypographyV2 variant="caption2" color={theme.text.black[80]}>
          {title}
        </TypographyV2>
      </Pressable>
    </View>
  )
}
