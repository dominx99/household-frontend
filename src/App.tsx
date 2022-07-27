import { ThemeProvider } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import { darkTheme } from './app/mui/themes';
import DashboardPage from "./pages/dashboard/DashboardPage";
import RequireAuthentication from "./app/router/RequireAuthentication";
import RequireNonAuthentication from "./app/router/RequireNonAuthentication";
import RouteList from './app/router/RouteList';
import { useAppDispatch } from "./app/hooks";
import { setAuthenticationDetails } from "./components/authentication/AuthenticationSlice";
import GroupPage from "./pages/groups/GroupPage";

function App() {
  let dispatch = useAppDispatch();
  let restoredDetails = localStorage.getItem('AUTHENTICATION_DETAILS');

  dispatch(setAuthenticationDetails(restoredDetails));

  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path={RouteList.AUTHENTICATE} element={
          <RequireNonAuthentication redirectTo={RouteList.DASHBOARD}>
            <LoginPage />
          </RequireNonAuthentication>
        }/>

        <Route path={RouteList.DASHBOARD} element={
          <RequireAuthentication redirectTo={RouteList.AUTHENTICATE}>
            <DashboardPage />
          </RequireAuthentication>
        }/>

        <Route path={RouteList.GROUP} element={
          <RequireAuthentication redirectTo={RouteList.AUTHENTICATE}>
            <GroupPage />
          </RequireAuthentication>
        }/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
