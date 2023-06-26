import React from "react";
import { createContext, useContext, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
const StyleUpContext = React.createContext(null);
export const useStyleUp = () => useContext(StyleUpContext);

export const StyleUpProvider = ({ children }) => {
  const [styleUpMsg, setStyleUpMsg] = useState("");
  const [styleMsgHistory, setStyleMsgHistory] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  return (
    <StyleUpContext.Provider
      value={{
        styleUpMsg,
        setStyleUpMsg,
        styleMsgHistory,
        setStyleMsgHistory,
        isloading,
        setIsLoading,
      }}
    >
      {children}
    </StyleUpContext.Provider>
  );
};
