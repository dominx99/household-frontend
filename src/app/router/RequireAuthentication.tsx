import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { authenticationDetails } from "../../components/authentication/AuthenticationSlice";
import { useAppSelector } from "../hooks";

interface Props {
  children: ReactElement<any, any>,
  redirectTo: string,
}

const RequireAuthentication = (props: Props) => {
  const details = useAppSelector(authenticationDetails);

  let isAuthenticated: boolean = details !== null;

  return isAuthenticated ? props.children : <Navigate to={props.redirectTo} />;
}

export default RequireAuthentication;
