import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contador from "./pages/Contador";
import Gatinhos from "./pages/Gatinhos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Gatinhos />
  </React.StrictMode>
);
