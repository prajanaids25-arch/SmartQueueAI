import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueueProvider } from "./context/QueueContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueueProvider>
        <App />
      </QueueProvider>
    </BrowserRouter>
  </React.StrictMode>
);