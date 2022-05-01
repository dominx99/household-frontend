import { Grid } from "@mui/material"
import { FC } from "react"
import LoginForm from "../../components/authentication/LoginForm"
import { ThemeWrapper } from "./LoginPage.styles"

interface Props {}

const LoginPage: FC<Props> = () => {
  return (
    <ThemeWrapper>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <LoginForm />
      </Grid>
    </ThemeWrapper>
  )
}

export default LoginPage
