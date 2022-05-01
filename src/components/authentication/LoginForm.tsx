import { FC } from "react"
import { Button, Card, CardActions, CardContent, CardHeader, FormGroup, TextField } from "@mui/material"
import { useAppDispatch } from "../../app/hooks"
import { LoadingButton } from '@mui/lab';

interface Props {}

const LoginForm: FC<Props> = () => {
  // const dispatch = useAppDispatch();

  const handleLoginFormSubmitted = async () => {
  }

  return (
    <Card
      component="main"
      sx={{ width: 500, margin: '1rem' }}
    >
      <CardHeader title="Login" />
      <CardContent>
        <FormGroup>
          <TextField id="outlined-basic" label="Email" variant="outlined" margin={"dense"} />
          <TextField id="filled-basic" label="Password" type="password" variant="outlined" margin={"dense"} />
        </FormGroup>
      </CardContent>
      <CardActions
        sx={{ justifyContent: 'flex-end' }}
      >
        <LoadingButton
          variant="contained"
          onClick={handleLoginFormSubmitted}
        >Submit</LoadingButton>
      </CardActions>
    </Card>
  )
}

export default LoginForm
