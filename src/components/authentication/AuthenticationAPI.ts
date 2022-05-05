import axios from "./../../app/axios";
import { AuthenticationCredentials, AuthenticationDetails } from "./AuthenticationSlice";

export function authenticate(authenticationCredentials: AuthenticationCredentials) {
  return new Promise<{ data: AuthenticationDetails }>(async (resolve, reject) => {
    try {
      const res = await axios.post('api/v1/login', authenticationCredentials);

      if (res.data && res.data.token && res.data.refresh_token) {
        localStorage.setItem('AUTHENTICATION_DETAILS', res.data);
      }

      resolve(res);
    } catch (e: any) {
      reject("Invalid credentials");
    }
  })
}
