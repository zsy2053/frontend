import React, {useState} from "react";
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

export const StyleUpContext = React.createContext(null);

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
  {
    path: "/join", element: <Join />
  },
  {
    path: "/how", element: <HowItWorks />
  },

]);

const App = () => {
  const [styleUpMsg, setStyleUpMsg] = useState("");
  const [styleMsgHistory, setStyleMsgHistory] = useState([])
  const [isloading, setIsLoading] = useState(false)

  return <React.StrictMode>
        <GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_CLIENT_ID}`}>
          <StyleUpContext.Provider value={{ styleUpMsg, setStyleUpMsg, styleMsgHistory, setStyleMsgHistory, isloading, setIsLoading }}>
            <RouterProvider router={router} />
          </StyleUpContext.Provider>
        </GoogleOAuthProvider>
    </React.StrictMode>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
