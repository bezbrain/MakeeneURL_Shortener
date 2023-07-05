import React, { useContext, useState } from "react";

import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const AppContext = React.createContext();

const API_KEY = import.meta.env.VITE_API_KEY;

export const AppProvider = ({ children }) => {
  const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "makeene-url-shortener.firebaseapp.com",
    projectId: "makeene-url-shortener",
    storageBucket: "makeene-url-shortener.appspot.com",
    messagingSenderId: "911393602091",
    appId: "1:911393602091:web:76b91f22e52afd246b086e",
  };

  initializeApp(firebaseConfig);

  const db = getFirestore();
  const colRef = collection(db, "login");

  const [toggleNav, setToggleNav] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [showRegLogin, setShowRegLogin] = useState(false);

  // Login States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AppContext.Provider
      value={{
        toggleNav,
        setToggleNav,
        toggleModal,
        setToggleModal,
        showRegLogin,
        setShowRegLogin,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
