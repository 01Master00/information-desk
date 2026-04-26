import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "kioskboard/dist/kioskboard-2.3.0.min.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
