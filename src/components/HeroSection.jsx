import { Link } from "react-router-dom";
import "../styles/hero.css";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { setToggleModal, setShowRegLogin } = useGlobalContext();
  return (
    <main className="hero-section">
      <div className="header-intro">
        <h2>
          Have a Better Experience with Our Advanced{" "}
          <span>URLs Shortening</span> and Customization Tools
        </h2>
      </div>
      <p>
        Personalize and customize URLs to your preferred and most simple
        combination of characters, to enhance more user experience.
      </p>
      <button
        onClick={() => {
          setShowRegLogin(true);
          setToggleModal(true);
        }}
      >
        Sign Up
      </button>
      <Link to="/how-it-works">Learn More</Link>
    </main>
  );
};

export default HeroSection;
