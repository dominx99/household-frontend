import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ThemeWrapper = styled(Box)`
  background-color: ${props => props.theme.palette.background.default};
  min-height: 100vh;
`
