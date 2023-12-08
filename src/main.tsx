import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./scss/main.scss";
import { Layout } from "./components/layout/Layout";
import { Error } from "./components/misc/Error";
import { LandingPage } from "./views/LandingPage";
import { Guides } from "./views/Guides";
import { MaterialGuide } from "./views/MaterialGuide";
import { ClimateImpact } from "./views/ClimateImpact";
import { Login } from "./views/Login";
import { AboutUs } from "./views/AboutUs";
import { Admin } from "./components/admin/Admin";
import { AdminHandlePost } from "./components/admin/AdminHandlePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>,
        index: true,
      },
      {
        path: "/guides",
        element: <Guides></Guides>,
        index: true,
      },
      {
        path: "/material-guide",
        element: <MaterialGuide></MaterialGuide>,
        index: true,
      },
      {
        path: "/climate-impact",
        element: <ClimateImpact></ClimateImpact>,
        index: true,
      },
      {
        path: "/login",
        element: <Login></Login>,
        index: true,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
        index: true,
      },
      {
        path: "/admin",
        element: <Admin></Admin>,
        children: [
          {
            path: "/admin/:id",
            element: <AdminHandlePost></AdminHandlePost>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
