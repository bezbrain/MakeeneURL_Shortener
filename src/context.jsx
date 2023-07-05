import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [showRegLogin, setShowRegLogin] = useState(false);
  return (
    <AppContext.Provider
      value={{
        toggleNav,
        setToggleNav,
        toggleModal,
        setToggleModal,
        showRegLogin,
        setShowRegLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
