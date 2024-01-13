import { Layout } from "./components/layout/Layout";
import { Error } from "./components/misc/Error";
import { LandingPage } from "./views/LandingPage";
import { Posts } from "./views/Posts";
import { Post } from "./views/Post";
import { MaterialGuide } from "./views/MaterialGuide";
import { ClimateImpact } from "./views/ClimateImpact";
import { createBrowserRouter } from "react-router-dom";

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
    ],
  },
]);
