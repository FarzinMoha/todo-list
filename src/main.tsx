import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider , ColorModeScript, extendTheme } from "@chakra-ui/react";


const config = {
  initialColorMode:'light',
  useSystemColorMode:true
}

const theme = extendTheme({
  config,
})


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
