import { FC, useState } from "react"
import { Alert, Card, CardActions, CardContent, CardHeader, FormGroup, TextField } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { LoadingButton } from '@mui/lab';
import { authenticateAsync, AuthenticationCredentials, authenticationMessage } from "./AuthenticationSlice";

interface Props {}

const LoginForm: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const message = useAppSelector(authenticationMessage);

  const [form, setForm] = useState<AuthenticationCredentials>({
    username: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleLoginFormSubmitted = async () => {
    dispatch(authenticateAsync(form));
  }

  return (
    <Card
      component="main"
      sx={{ width: 500, margin: '1rem' }}
    >
      <CardHeader title="Login" />
      <CardContent>
        <FormGroup>
          <TextField onChange={handleChange} name="username" id="login-name" label="Email" variant="outlined" margin={"normal"} />
          <TextField onChange={handleChange} name="password" id="login-password" label="Password" type="password" variant="outlined" margin={"normal"} />
        </FormGroup>

        { message ? (
          <Alert severity="error">{ message }</Alert>
        ) : ('') }
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
