import { ThemeProvider } from "@mui/material";
import Routes from "../src/routes";
import theme from "./theme";
import { LoaderProvider } from "./context/LoaderProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoaderProvider>
        <Routes />
      </LoaderProvider>
    </ThemeProvider>
  );
}

export default App;
