'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#004d40',
      light: '#39796b',
      dark: '#00251a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#DB9E30',
      light: 'rgba(219, 158, 48, 0.5)',
      dark: '#c8b900',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter)',
    h1: {
      fontFamily: 'var(--font-cinzel-decorative)',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: 'var(--font-cinzel-decorative)',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: 'var(--font-cinzel-decorative)',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: 'var(--font-cinzel-decorative)',
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: 'var(--font-cinzel-decorative)',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: 'var(--font-cinzel-decorative)',
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.2,
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px',
          fontFamily: 'var(--font-inter)',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            fontFamily: 'var(--font-inter)',
          },
          '& .MuiInputLabel-root': {
            fontFamily: 'var(--font-inter)',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'p',
          subtitle2: 'p',
          body1: 'p',
          body2: 'p',
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
