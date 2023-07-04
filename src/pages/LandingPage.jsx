import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import WhyChooseUs from "../components/WhyChooseUs";

const LandingPage = () => {
  return (
    <>
      <main className="header-and-hero">
        <HeroSection />
      </main>
      <div className="hero-img-con">
        <img src="../../Images/HeroSection_img.jpeg" alt="" />
      </div>
      <WhyChooseUs />
    </>
  );
};

export default LandingPage;
