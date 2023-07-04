import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <AppContext.Provider value={{ toggleNav, setToggleNav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
