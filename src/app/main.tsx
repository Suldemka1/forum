import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routing/router.tsx";
import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";
import "./styles/index.css";
import "./styles/App.css";
import "leaflet/dist/leaflet.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
