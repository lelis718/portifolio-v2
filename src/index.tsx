import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./index.scss";

const SayHello = function(){
  console.log(
  "██   ██ ███████ ██      ██       ██████      ███████ ████████ ██████   █████  ███    ██  ██████  ███████ ██████  ██ \n" +
  "██   ██ ██      ██      ██      ██    ██     ██         ██    ██   ██ ██   ██ ████   ██ ██       ██      ██   ██ ██ \n" +
  "███████ █████   ██      ██      ██    ██     ███████    ██    ██████  ███████ ██ ██  ██ ██   ███ █████   ██████  ██ \n" +
  "██   ██ ██      ██      ██      ██    ██          ██    ██    ██   ██ ██   ██ ██  ██ ██ ██    ██ ██      ██   ██    \n" +
  "██   ██ ███████ ███████ ███████  ██████      ███████    ██    ██   ██ ██   ██ ██   ████  ██████  ███████ ██   ██ ██");
  console.log("Thanks for the visit! Fell free to check the code! ")
  console.log("This and more of my projects are available on https://github.com/lelis718/ ")
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  palette: { 
    primary: {
      main: "#cccccc",
      light: "#ffffff",
      dark: "#8c8a8c"
    },
    secondary: {
      main: "#0078d4",
      light: "#2c2c2c",
      dark: "#181818"
    },
    background: {
      default: "#1f1f1f",
    },
  },
});

root.render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
);

SayHello();