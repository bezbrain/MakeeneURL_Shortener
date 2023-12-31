import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Trim from "../components/Trim";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import RegLogin from "./RegLogin";

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
      <ContactUs />
      <RegLogin />
    </>
  );
};

export default LandingPage;
