import React, { useState } from "react";
export const StatusBarContext = React.createContext({});

export const StatusBarProvider = ({ children }) => {
  const [statusBar, setStatusBar] = useState({
    mode: "light",
  });
  const [scrollY, setScrollY] = useState(0);

  return (
    <StatusBarContext.Provider
      value={{ statusBar, setStatusBar, scrollY, setScrollY }}
    >
      {children}
    </StatusBarContext.Provider>
  );
};

export const FontContext = React.createContext({});

export const FontProvider = ({ children }) => {
  const [rem, setRem] = useState(1);

  return (
    <FontContext.Provider value={{ rem, setRem }}>
      {children}
    </FontContext.Provider>
  );
};
