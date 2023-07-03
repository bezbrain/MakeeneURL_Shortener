import { Link } from "react-router-dom";
import "../styles/header.css";
import HeroSection from "../components/HeroSection";

const LandingPage = () => {
  return (
    <>
      <main className="header-and-hero">
        <header className="top-header">
          <div className="logo-con">
            <img src="../../Images/Logo.png" alt="Logo" />
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
        <HeroSection />
      </main>
      <div className="hero-img-con">
        <img src="../../Images/HeroSection_img.jpeg" alt="" />
      </div>
    </>
  );
};

export default LandingPage;
