import { action } from '@storybook/addon-actions'
import { ScrollView, useWindowDimensions } from 'react-native'
import { fromTemplate } from '../../../.storybook/utils'
import { Body, Button, Header } from '../../atoms'
import { useModal } from '../../hooks'
import { ConfirmationModalContent } from '../confirmationModalContent'
import type { ModalProps } from './types'
import { Modal } from './index'

const storyConfig = {
  title: 'Design System/Organisms/Modal',
  component: Modal,
  layout: 'fullscreen',
}

const Template = ({ children, size }: ModalProps) => {
  const { toggle, isOpen, close } = useModal()
  const { height, width } = useWindowDimensions()
  return (
    <ScrollView style={{ height, width }}>
      <Button variant="primary" onPress={toggle} title="Toggle" />
      <Modal isOpen={isOpen} onClose={close} size={size}>
        {children}
      </Modal>
    </ScrollView>
  )
}

export const Default = fromTemplate(Template, {
  children: <Header>Hi there! 👋</Header>,
})

export const Confirmation = fromTemplate(Template, {
  size: 'lg',
  children: (
    <ConfirmationModalContent
      title="Claim reward"
      description="Are you sure you want to claim the reward?"
      confirmAction={{
        title: 'Confirm',
        onPress: action('confirmAction.onPress'),
      }}
      cancelAction={{
        title: 'Cancel',
        onPress: action('cancelAction.onPress'),
      }}
    >
      <Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolor
      </Body>
    </ConfirmationModalContent>
  ),
})

export default storyConfig
