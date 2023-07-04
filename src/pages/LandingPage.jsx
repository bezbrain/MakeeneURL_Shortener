import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <>
      <main className="header-and-hero">
        {/* <Header /> */}
        <HeroSection />
      </main>
      <div className="hero-img-con">
        <img src="../../Images/HeroSection_img.jpeg" alt="" />
      </div>
    </>
  );
};

export default LandingPage;
