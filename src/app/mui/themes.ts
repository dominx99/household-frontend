import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: blueGrey[800],
      paper: blueGrey[800]
    }
  },
})
