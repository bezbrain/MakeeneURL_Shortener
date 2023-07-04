import { Link } from "react-router-dom";
import "../styles/header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../context";
import LogoDesign from "./LogoDesign";

const Header = () => {
  const { toggleNav, setToggleNav } = useGlobalContext();

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
            <Link>My URLs</Link>
          </li>
          <li>Get URL</li>
          <li>
            <Link>How it Works</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link>Log in</Link>
          </li>
          <li>
            <button>Try for free</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
