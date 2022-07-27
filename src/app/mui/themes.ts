import { createTheme } from "@mui/material";
import { blueGrey, grey, red } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: blueGrey[800],
      paper: blueGrey[800]
    },
    text: {
      primary: grey[100],
      secondary: grey[100],
      disabled: grey[100],
    },
    primary: {
      light: blueGrey[500],
      main: blueGrey[500],
      contrastText: '#fefefe',
    }
  },
})
