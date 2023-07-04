import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import WhyChooseUs from "../components/WhyChooseUs";
import Trim from "../components/Trim";

const LandingPage = () => {
  return (
    <>
      <main className="header-and-hero">
        <HeroSection />
        <div className="hero-img-con">
          <img src="../../Images/HeroSection_img.jpeg" alt="" />
        </div>
      </main>
      <WhyChooseUs />
      <Trim />
    </>
  );
};

export default LandingPage;
