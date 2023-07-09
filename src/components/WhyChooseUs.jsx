import { Link } from "react-router-dom";
import "../styles/whychooseus.css";

const WhyChooseUs = () => {
  return (
    <main className="why-choose-us">
      <div className="choose-us-content-con">
        <h2>
          Why Choose <span>MakeeneShortener</span>
        </h2>
        <p>
          Makeene URL Shortener is one of those few outstanding URL shortener
          you would see out there with not just the shortening feature but also
          with additional feature like getting all previous links you have
          shortened with their respective short links.
        </p>
      </div>
      <div className="url-shortening-con feature">
        <img src="../../Images/Group 6.png" alt="" />
        <h4>URL Shortening</h4>
        <p>
          With little to no stress, you can get your short URLs for long links
          and enjoy better experience personally and with your virtual
          customers.
        </p>
      </div>
      <div className="url-customization-con feature">
        <img src="../../Images/Group 6 (2).png" alt="" />
        <h4>URLs Storage</h4>
        <p>
          All links shortened can all be viewed in the{" "}
          <Link to="/myurls">My URLs</Link> page. On this page, you would get
          previous links shortened with their respective short links.
        </p>
      </div>
    </main>
  );
};

export default WhyChooseUs;
