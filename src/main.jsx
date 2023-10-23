import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM from "react-dom"

import App from "./App.jsx";
import "./index.css";
import { AppContextProvider } from "./components/contextApi/ContextPart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
