import React, { useContext, useRef, useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// {
//           createdby:
//     originalLink:
//         }

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
  const colRef = collection(db, "url");

  const auth = getAuth();

  const [toggleNav, setToggleNav] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [showRegLogin, setShowRegLogin] = useState(false);

  // State to indicate the current page a user is on
  const [currentPage, setCurrentPage] = useState("");

  // Register States
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  // Login States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgFromServer, setMsgFromServer] = useState("");
  const [loginUserId, setLoginUserId] = useState(""); //Login User ID

  const getToken = localStorage.getItem("authToken"); // Get the auth token from local storge

  // Success Message
  const [isSuccess, setIsSuccess] = useState(false);
  // Failure Message
  const [isFailure, setIsFailure] = useState(false);

  // "Log in" nav item to Change to "Logout" if Logged in and vice versa
  const [isLogged, setIsLogged] = useState("Log in");

  // Ref to access login or logout textContent
  const loginLogoutContentRef = useRef(null);

  const [checkIfUserIsLoggedIn, setCheckIfUserIsLoggedIn] = useState("");

  // TrimType States
  const [originalLink, setOriginalLink] = useState("");
  const [generatedResult, setGeneratedResult] = useState("");
  const [trimcompErrorMsg, setTrimcompErrorMsg] = useState("");

  // Original Link and Login ID States
  const [urlArr, setUrlArr] = useState([]);

  const [generatingLinkLoading, setGeneratingLinkLoading] = useState("");

  /* Function to extract error message from the firebase returned message */
  const extratingErrorMsg = (error) => {
    const startIndex = error.indexOf("/") + 1;
    const endIndex = error.indexOf(")");
    const errorCode = error.substring(startIndex, endIndex);
    // Capitalize the error message
    const capitalizedError =
      errorCode.charAt(0).toUpperCase() + errorCode.slice(1).toLowerCase();
    return capitalizedError;
  };

  /* ================ */
  // Access the user to login or logout
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // setCheckIfUserIsLoggedIn(user);
        // console.log(user);
        setIsLogged("Logout");
      } else {
        // setCheckIfUserIsLoggedIn("");
        setIsLogged("Log in");
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

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
        regName,
        setRegName,
        regEmail,
        setRegEmail,
        regPassword,
        setRegPassword,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        auth,
        signOut,
        addDoc,
        colRef,
        onSnapshot,
        isSuccess,
        setIsSuccess,
        isFailure,
        setIsFailure,
        msgFromServer,
        setMsgFromServer,
        getToken,
        isLogged,
        setIsLogged,
        extratingErrorMsg,
        loginLogoutContentRef,
        // checkIfUserIsLoggedIn,
        // setCheckIfUserIsLoggedIn,
        originalLink,
        setOriginalLink,
        generatedResult,
        setGeneratedResult,
        urlArr,
        setUrlArr,
        loginUserId,
        setLoginUserId,
        trimcompErrorMsg,
        setTrimcompErrorMsg,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
