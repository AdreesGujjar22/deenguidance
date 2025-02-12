"use client"
import { createTheme, ThemeOptions } from '@mui/material/styles';

const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: '#004B39',
    },
    secondary: {
      main: '#DB9E30',
      light : "rgba(219,158,48,0.5)"
    },
  },
  typography: {
    h1: {
      fontFamily : 'CinzelDecorative',
      fontStyle : "normal",
      fontWeight : 700,
      fontSize : '54.9px',
      lineHeight : '64px'
    },
    h2: {
      fontFamily : 'CinzelDecorative',
      fontStyle : "normal",
      fontWeight : 700,
      fontSize : '30px',
      lineHeight : '36px'
    },
    body1 : {
      fontStyle : "normal",
      fontWeight : 400,
      fontSize : '20px',
      lineHeight : '32px'
    },
    body2 : {
      fontStyle : "normal",
      fontWeight : 400,
      fontSize : '13px',
      lineHeight : '20px'
    },
  },
});

export default theme;
