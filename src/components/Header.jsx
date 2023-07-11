import { Link } from "react-router-dom";
import "../styles/header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../context";
import LogoDesign from "./LogoDesign";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const Header = () => {
  const {
    toggleNav,
    setToggleNav,
    setShowRegLogin,
    setToggleModal,
    isLogged,
    loginLogoutContentRef,
    signOut,
    auth,
    setIsLogged,
    currentPage,
    setCurrentPage,
    setUrlArr,
  } = useGlobalContext();
  const navigate = useNavigate();

  const linkContentRef = useRef(null); // Ref to loop over the ul children

  const myUrlsRef = useRef(null);
  const getUrlRef = useRef(null);
  const howItWorksRef = useRef(null);

  const handleLoginLogout = async () => {
    if (loginLogoutContentRef.current.textContent === "Log in") {
      setShowRegLogin(false);
      setToggleNav(false);
      setToggleModal(true);
    } else {
      await signOut(auth);
      // Clear the authentication token from local storage
      localStorage.removeItem("authToken");
      setCurrentPage(""); // Set the state that indicates the current page back to empty
      setUrlArr([]);
      setIsLogged("Log in");
    }
  };

  // Indicate current page with border bottom
  const handleCurrentPageIndicator = (e) => {
    const clickedText = e.target.textContent;
    const linkArr = [...linkContentRef.current.children];
    const newLinkArr = linkArr.map((each) => each.textContent);

    if (newLinkArr.includes(clickedText)) {
      setCurrentPage(clickedText);
    } else {
      setCurrentPage("");
    }
  };

  // Bcos I am accessing the refs before assigning them, I'm using useEffect to make sure that the refs return null on initial load of the page
  useEffect(() => {
    myUrlsRef.current = myUrlsRef.current || null;
    getUrlRef.current = getUrlRef.current || null;
    howItWorksRef.current = howItWorksRef.current || null;
  }, []);

  return (
    <header className="top-header">
      <div className="logo-con">
        <LogoDesign />
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="open-nav"
        onClick={() => setToggleNav(true)}
      />
      <nav className={`${toggleNav ? "add-nav-css" : ""}`}>
        <FontAwesomeIcon
          icon={faTimes}
          className="close-nav"
          onClick={() => setToggleNav(false)}
        />
        <ul onClick={handleCurrentPageIndicator} ref={linkContentRef}>
          <li
            className={`${
              currentPage === myUrlsRef.current?.textContent
                ? "add-current-page-indication"
                : ""
            }`}
            ref={myUrlsRef}
          >
            <Link to="/myurls" onClick={() => setToggleNav(false)}>
              My URLs
            </Link>
          </li>
          <li
            className={`${
              currentPage === getUrlRef.current?.textContent
                ? "add-current-page-indication"
                : ""
            }`}
            ref={getUrlRef}
            onClick={() => {
              navigate("/");
              setToggleNav(false);
            }}
          >
            <a href="#get-url">Get URL</a>
          </li>
          <li
            className={`${
              currentPage === howItWorksRef.current?.textContent
                ? "add-current-page-indication"
                : ""
            }`}
            ref={howItWorksRef}
            onClick={() => {
              setToggleNav(false);
            }}
          >
            <Link to="/how-it-works">How it Works</Link>
          </li>
        </ul>
        <ul>
          <li ref={loginLogoutContentRef} onClick={handleLoginLogout}>
            <Link>{isLogged}</Link>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/");
                setToggleNav(false);
                setCurrentPage("");
              }}
            >
              <a href="#try-for-free">Try for free</a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
