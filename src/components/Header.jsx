import { Link } from "react-router-dom";
import "../styles/header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../context";
import LogoDesign from "./LogoDesign";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { toggleNav, setToggleNav } = useGlobalContext();
  const navigate = useNavigate();

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
          <li onClick={() => navigate("/")}>
            <a href="#get-url">Get URL</a>
          </li>
          <li>
            <Link to="/how-it-works">How it Works</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <button>
              <a href="#try-for-free">Try for free</a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
