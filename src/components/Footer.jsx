import LogoDesign from "./LogoDesign";
import "../styles/footer.css";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <main className="footer">
      <section className="footer-sect">
        <LogoDesign />
        <div className="socials-con">
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaLinkedin className="icon" />
          <FaFacebook className="icon" />
        </div>
      </section>
      <div className="terms-con">
        <p>Terms of Service</p>
        <p>Security</p>
        <p>MakeeneURLShortCus 2023</p>
      </div>
    </main>
  );
};

export default Footer;
