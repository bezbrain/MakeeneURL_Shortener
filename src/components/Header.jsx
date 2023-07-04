import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="top-header">
      <div className="logo-con">
        <img src="../../Images/Logo_Design.png" alt="Logo" />
      </div>
      <nav>
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
