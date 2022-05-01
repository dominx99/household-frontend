import axios from "axios";
import { AuthenticationCredentials } from "./AuthenticationSlice";

export function authenticate(authenticationCredentials: AuthenticationCredentials) {
  return new Promise<{ data: AuthenticationCredentials }>(async (resolve) => {
    const res = await axios.post('api/authenticate', authenticationCredentials);

    resolve(res);
  })
}
