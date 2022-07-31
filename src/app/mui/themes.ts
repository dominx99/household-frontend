import { createTheme } from "@mui/material";
import { grey, indigo, lightBlue } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: grey[100],
      secondary: grey[100],
      disabled: grey[100],
    },
    primary: {
      light: indigo[300],
      main: indigo[300],
      contrastText: grey[200],
    },
    neutral: {
      main: '#64748B',
      contrastText: grey[100],
    }
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
