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
const TimerContext = React.createContext({});
const TimerProvider = ({ children }) => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return null;
    } else {
      return (
        <Span variant="p" fontStyle="bold" color={colors.red}>
          {minutes}:{seconds} minutes
        </Span>
      );
    }
  };
  return (
    <TimerContext.Provider value={{ renderer }}>
      {children}
    </TimerContext.Provider>
  );
};
