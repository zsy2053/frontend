import React, { useState } from "react";
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
  Join,
  HowItWorks,
} from "./pages";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { StyleUpProvider } from "./context/StyleUpContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/app",
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
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/how",
    element: <HowItWorks />,
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <GoogleOAuthProvider
        clientId={`${import.meta.env.VITE_GOOGLE_CLIENT_ID}`}
      >
        <StyleUpProvider>
          <RouterProvider router={router} />
        </StyleUpProvider>
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
