import { TryrollProvider } from '../src/providers'
import { injectFonts, injectFontsV2 } from '../src/styles'

injectFonts()
injectFontsV2()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
}

export const decorators = [
  (Story) => (
    <TryrollProvider>
      <Story />
    </TryrollProvider>
  ),
]
