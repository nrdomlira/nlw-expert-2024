import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import {Toaster} from "sonner"
import "./global.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster richColors />
  </React.StrictMode>
);
