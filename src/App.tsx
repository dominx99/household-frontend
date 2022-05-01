import { ThemeProvider } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import { darkTheme } from './app/mui/themes';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
