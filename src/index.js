import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";

const rootElement = document.getElementById("app");
createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
