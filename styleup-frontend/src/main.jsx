import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Landing, Home, GoogleSignInSuccess, EarlyAccess } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/google_sign_in/:pathParam?",
    element: <GoogleSignInSuccess />,
  },
  {
    path: "/early-access",
    element: <EarlyAccess />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
