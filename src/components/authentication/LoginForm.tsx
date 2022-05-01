import { FC, useState } from "react"
import { Button, Card, CardActions, CardContent, CardHeader, FormGroup, TextField } from "@mui/material"
import { useAppDispatch } from "../../app/hooks"
import { LoadingButton } from '@mui/lab';
import { authenticateAsync, AuthenticationCredentials } from "./AuthenticationSlice";

interface Props {}

const LoginForm: FC<Props> = () => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<AuthenticationCredentials>({
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleLoginFormSubmitted = async () => {
    dispatch(authenticateAsync(form))
  }

  return (
    <Card
      component="main"
      sx={{ width: 500, margin: '1rem' }}
    >
      <CardHeader title="Login" />
      <CardContent>
        <FormGroup>
          <TextField onChange={handleChange} name="email" id="login-name" label="Email" variant="outlined" margin={"normal"} />
          <TextField onChange={handleChange} name="password" id="login-password" label="Password" type="password" variant="outlined" margin={"normal"} />
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
