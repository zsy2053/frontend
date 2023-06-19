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
  About,
  Error,
} from "./pages";
import { GoogleOAuthProvider } from "@react-oauth/google";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
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
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_CLIENT_ID}`}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
