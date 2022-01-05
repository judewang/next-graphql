import { ThemeUIContextValue, Theme, useThemeUI } from '@theme-ui/core';

const makeTheme = <T extends Theme>(t: T) => t;

export const theme = makeTheme({
  // config: {
  //   initialColorModeName: "light",
  //   useLocalStorage: false,
  // },
  colors: {
    red: '#ff404c',
    black: '#000000',
    gray: '#343434',
    white: '#FFFFFF',
    light: '#F2F2F2',
    primary: '#374968',
    body: '#2d2a2c',
    background: '#F2F2F2',
    secondary: 'rgba(0,0,0,0.5)',
    muted: 'rgba(0,0,0,0.3)',
    disabled: 'rgba(0,0,0,0.1)',
    // modes: {
    //   dark: {
    //     body: "#FFFFFF",
    //     background: "#343434",
    //     secondary: "rgba(255,255,255,0.5)",
    //     muted: "rgba(255,255,255,0.3)",
    //     disabled: "rgba(255,255,255,0.1)",
    //   },
    // },
  },
  breakpoints: ['768px', '1024px', '1440px'],
  fonts: {
    body: '"Noto Sans TC", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 36, 48],
  sizes: {
    icon: 20,
    container: 936,
  },
  space: [0, 4, 8, 16, 24, 32, 48, 64],
  radii: {
    small: 4,
    medium: 8,
    large: 12,
  },
  zIndices: {
    dialog: 30,
    header: 20,
    cover: 10,
    base: 0,
    hidden: -1,
  },
  transitions: {
    base: 'all .25s ease-in-out',
  },
  variants: {
    absoluteCenter: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    dot: {
      bg: 'currentColor',
      size: 12,
      borderRadius: '50%',
    },
  },
  text: {
    heading: {
      fontWeight: 'heading',
    },
  },
  layout: {
    container: {
      mx: 'auto',
      px: [20, 40, 0],
      width: '100%',
    },
  },
  links: {
    underline: {
      color: 'inherit',
    },
  },
  buttons: {
    reset: {
      bg: 'transparent',
      p: 0,
      fontFamily: 'body',
      transition: 'base',
      cursor: 'pointer',
      borderRadius: 0,
      color: 'currentColor',
      textAlign: 'left',
      '&:hover': {
        color: 'primary',
      },
    },
    link: {
      variant: 'buttons.reset',
      textDecoration: 'underline',
    },
    icon: {
      size: 'icon',
      p: 0,
      cursor: 'pointer',
      transition: 'base',
      '@media (hover)': {
        '&:hover': {
          color: 'primary',
        },
      },
    },
  },
  // shadows: {},
  // grids: {},
  // forms: {},
  // badges: {},
  styles: {
    h1: {
      variant: 'text.heading',
      fontSize: [6, null, 7],
    },
    h2: {
      variant: 'text.heading',
      fontSize: [5, null, 6],
    },
    h3: {
      fontSize: [4, null, 5],
    },
    h4: {
      fontSize: [2, null, 3],
    },
    h5: {
      fontSize: [1, null, 2],
    },
    h6: {
      fontSize: [0, null, 1],
    },
    root: {
      body: {
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
        bg: 'background',
        color: 'body',
      },
      '&, body, #__next': {
        height: '100%',
      },
    },
  },
});

export type ExactTheme = typeof theme;

interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: ExactTheme;
}

export const useTheme = useThemeUI as unknown as () => ExactContextValue;
