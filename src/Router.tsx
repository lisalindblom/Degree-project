import { Layout } from "./components/layout/Layout";
import { Error } from "./components/misc/Error";
import { LandingPage } from "./views/LandingPage";
import { Posts } from "./views/Posts";
import { Post } from "./views/Post";
import { MaterialGuide } from "./views/MaterialGuide";
import { ClimateImpact } from "./views/ClimateImpact";
import { Login } from "./views/Login";
import { AboutUs } from "./views/AboutUs";
import { Admin } from "./components/admin/Admin";
import { AdminHandlePost } from "./components/admin/AdminHandlePost";
import { createBrowserRouter } from "react-router-dom";
import { Profile } from "./views/Profile";

export const router = createBrowserRouter([
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
        path: "/posts",
        element: <Posts></Posts>,
        index: true,
      },
      {
        path: "/posts/:id",
        element: <Post></Post>,
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
        path: "/about-us",
        element: <AboutUs></AboutUs>,
        index: true,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
        index: true,
      },
      {
        path: "/login",
        element: <Login></Login>,
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
