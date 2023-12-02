import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import MoviePage from "./components/MoviePage/MoviePage";
import { store } from "./store";
import { Provider } from "react-redux";
import Wrapper from "./components/Wrapper/Wrapper";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Recommend from "./components/Recommend/Recommend";
import { SkeletonTheme } from "react-loading-skeleton";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Wrapper />}>
      <Route path="/" element={<App />} />
      <Route path="/recommend" element={<Recommend />} />
      <Route path="/movie/:movieId" element={<MoviePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <SkeletonTheme baseColor="#4D4D4D" highlightColor="#8C8C8C">
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </SkeletonTheme>
);
