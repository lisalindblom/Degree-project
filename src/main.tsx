import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import App from "./App";
import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
