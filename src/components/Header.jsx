import { Link } from "react-router-dom";
import "../styles/header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../context";
import LogoDesign from "./LogoDesign";
import { useNavigate } from "react-router-dom";

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
  } = useGlobalContext();
  const navigate = useNavigate();

  const handleLoginLogout = async () => {
    if (loginLogoutContentRef.current.textContent === "Log in") {
      setShowRegLogin(false);
      setToggleNav(false);
      setToggleModal(true);
    } else {
      await signOut(auth);

      // Clear the authentication token from local storage
      localStorage.removeItem("authToken");

      setIsLogged("Log in");
    }
  };

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
        <ul>
          <li>
            <Link to="/myurls" onClick={() => setToggleNav(false)}>
              My URLs
            </Link>
          </li>
          <li
            onClick={() => {
              navigate("/");
              setToggleNav(false);
            }}
          >
            <a href="#get-url">Get URL</a>
          </li>
          <li onClick={() => setToggleNav(false)}>
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
