import { createTheme } from "@mui/material";
import { grey, lightBlue } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: grey[100],
      secondary: grey[100],
      disabled: grey[100],
    },
    primary: {
      ...lightBlue,
      contrastText: grey[200],
    },
  },
})
