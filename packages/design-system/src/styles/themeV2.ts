type PaletteBaseOpacity = 20 | 40 | 60 | 80 | 100
interface PaletteBase {
  primary: Record<PaletteBaseOpacity, string>
  Highlight1: string
  highlight2: Record<PaletteBaseOpacity, string>
  sucess: string
  danger: string
  warning: string
}

interface PaletteText {
  black: Record<30 | 80 | 100, string>
  white: Record<40 | 80 | 100, string>
}

interface PaletteBackground {
  white: string
  grey: string
  silver: string
}

export type Theme = {
  base: PaletteBase
  text: PaletteText
  background: PaletteBackground
}

export const lightTheme: Theme = {
  base: {
    primary: {
      100: 'rgba(0, 0, 0, 1)',
      80: 'rgba(0, 0, 0, 0.8)',
      60: 'rgba(0, 0, 0, 0.6)',
      40: 'rgba(0, 0, 0, 0.4)',
      20: 'rgba(0, 0, 0, 0.2)',
    },
    Highlight1: '#1B67D9',
    highlight2: {
      100: 'rgba(121, 102, 255, 1)',
      80: 'rgba(121, 102, 255, 0.8)',
      60: 'rgba(121, 102, 255, 0.6)',
      40: 'rgba(121, 102, 255, 0.4)',
      20: 'rgba(121, 102, 255, 0.2)',
    },
    danger: '#EB5757',
    warning: '#FF9900',
    sucess: '#1BC47D',
  },
  text: {
    black: {
      100: 'rgba(0, 0, 0, 1)',
      80: 'rgba(0, 0, 0, 0.8)',
      30: 'rgba(0, 0, 0, 0.3)',
    },
    white: {
      100: 'rgba(255, 255, 255, 1)',
      80: 'rgba(255, 255, 255, 0.8)',
      40: 'rgba(255, 255, 255, 0.4)',
    },
  },
  background: {
    white: '#FFFFFF',
    grey: '#F5F5F7',
    silver: '#E5E5E5',
  },
}