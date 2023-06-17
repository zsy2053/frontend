import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {
  Landing,
  Home,
  GoogleSignInSuccess,
  EarlyAccess,
  SignIn,
} from "./pages";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="174069416578-fgb8ks6su101kh793nduk9uqn03u9jpd.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
