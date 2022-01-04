import { ThemeUIContextValue, Theme, useThemeUI } from '@theme-ui/core';
import { rgba } from 'polished';

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
  radii: {
    small: 4,
    medium: 8,
    large: 12,
  },
  shadows: {
    darkGlow: `0 0 6px ${rgba('#374968', 0.52)}`,
    lightGlow: `1px 1px 6px rgba(255, 255, 255, 0.7), -1px -1px 6px rgba(255, 255, 255, 0.7)`,
    lightBoxGlow: `0 0 10px 2px rgba(255, 255, 255, 0.5)`,
    textDrop: `1px 2px 3px rgba(0, 0, 0, .69)`,
    textAura: `0 0 13px rgba(255,255,255, 0.35)`,
    moreLightGlow: `1px 1px 6px white, -1px -1px 6px white, 1px -1px 6px white, -1px 1px 6px white`,
  },
  sizes: {
    icon: 20,
    container: 936,
  },
  space: [0, 4, 8, 16, 24, 32, 48, 64],
  zIndices: {
    cover: 4,
    nav: 3,
    header: 2,
    base: 0,
    hidden: -1,
  },
  transitions: {
    base: 'all .25s ease',
  },
  layout: {
    container: {
      mx: 'auto',
      width: '100%',
    },
  },
  links: {
    underline: {
      color: 'inherit',
    },
  },
  buttons: {
    light: {
      bg: 'white',
      color: 'body',
      boxShadow: 'lightBoxGlow',
    },
    icon: {
      size: 'icon',
      position: 'relative',
      overflow: 'visible',
      cursor: 'pointer',
      transition: 'base',
      '@media (hover)': {
        '&:hover': {
          color: 'primary',
        },
      },
    },
  },
  variants: {
    absoluteCenter: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    darkDropShadow: {
      filter: `drop-shadow(0 0 13px ${rgba('#374968', 0.35)})`,
    },
    lightDropShadow: {
      filter: `drop-shadow(0 0 13px rgba(255, 255, 255, 0.4))`,
    },
    shareButton: {
      appearance: 'none',
      border: 0,
      boxShadow: 'none',
      padding: 0,
      margin: 0,
      color: 'white',
      whiteSpace: 'nowrap',
      pr: 2,
      fontSize: 0,
      borderRadius: 'small',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    shareButtonContainer: {
      gridTemplateColumns: 'auto auto',
      alignItems: 'center',
      columnGap: 0,
    },
  },
  // forms: {
  // checkbox: {
  //   color: 'white',
  //   'input:checked~&': {
  //     color: 'white',
  //   },
  //   'input:focus~&': {
  //     bg: 'transparent',
  //     color: 'white',
  //   },
  // },
  // input: {
  //   outline: 0,
  //   py: '.66em',
  //   color: 'white',
  //   bg: 'rgba(255,255,255, 0.2)',
  //   borderRadius: ['medium', null, 'large'],
  //   boxShadow: 'lightBoxGlow',
  //   '&:read-only': {
  //     opacity: 0.5,
  //   },
  //   '&:focus::placeholder': {
  //     color: 'transparent',
  //   },
  //   '&::placeholder': {
  //     color: 'inherit',
  //   },
  // },
  // },
  text: {
    heading: {
      fontWeight: 'heading',
    },
  },
  breakpoints: ['768px', '1024px', '1440px'],
  styles: {
    a: {
      color: 'currentColor',
      transition: 'base',
      textDecoration: 'none',
      '@media (hover)': {
        '&:hover': {
          color: 'primary',
        },
      },
    },
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      bg: 'background',
      color: 'body',
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
