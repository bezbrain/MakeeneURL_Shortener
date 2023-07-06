import { useRef } from "react";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import "../styles/trim.css";

const Trim = () => {
  const {
    trimType,
    setTrimType,
    originalUrl,
    setOriginalUrl,
    customizeUrl,
    setCustomizeUrl,
    trimResult,
    setTrimResult,
  } = useGlobalContext();

  const navigate = useNavigate();

  const buttonTextContentRef = useRef(null);

  const getToken = localStorage.getItem("authToken");
  // console.log(getToken);

  const handleTrimTypeChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTrimType({
      ...trimType,
      [name]: value,
    });
    // console.log(trimType);
  };

  const handleTrimBtn = (e) => {
    e.preventDefault();

    let buttonTextContent = buttonTextContentRef.current.textContent;

    // Check if logged in
    if (getToken) {
      if (!originalUrl) {
        console.log("Pls enter original URL");
        return;
      }
      if (buttonTextContent === "Choose Trim-type") {
        console.log("Pls choose a Trim type");
        return;
      }
      if (trimType.TrimType === "Customize" && !customizeUrl) {
        console.log("Pls, type preferred URL");
        return;
      }
      if (trimType.TrimType === "Trim") {
        console.log(trimURLFunc());
        setTrimResult(trimURLFunc());
        return;
      }
      console.log("Write code to input customized or trimmed URL here");
    } else {
      // Check if logged out
      console.log("Please, Login to use service");
    }
  };

  // Function to Trim URL
  const trimURLFunc = () => {
    let newOriginalUrl;
    if (originalUrl.length <= 100) {
      newOriginalUrl = originalUrl.slice(0, 30);
      return newOriginalUrl;
    }
    newOriginalUrl = originalUrl.slice(0, 40);
    return newOriginalUrl;
  };

  // Function to Customize URL
  const customizeURLFunc = () => {
    //
  };

  return (
    <main className="trim" id="get-url">
      <form id="try-for-free">
        <input
          type="text"
          placeholder="Paste original URL here"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <div className="change-act">
          <select name="TrimType" id="TrimType" onChange={handleTrimTypeChange}>
            <option value="">Choose</option>
            <option value="Trim">Trim</option>
            <option value="Customize">Customize</option>
          </select>
          <input
            type="text"
            placeholder={`${
              trimType.TrimType === "Customize"
                ? "Type preferred URL"
                : "About to Trim..."
            }`}
            value={`${trimType.TrimType === "Customize" ? customizeUrl : ""}`}
            onChange={(e) => setCustomizeUrl(e.target.value)}
          />
        </div>
        <button onClick={handleTrimBtn} ref={buttonTextContentRef}>{`${
          trimType.TrimType === "Trim"
            ? "Trim URL"
            : trimType.TrimType === "Customize"
            ? "Customize URL"
            : "Choose Trim-type"
        }`}</button>
        <br />
        <input
          type="text"
          placeholder="Get generated URL here"
          value={trimResult}
          onChange={(e) => setTrimResult(e.target.value)}
        />
        <p>
          By clicking{" "}
          <span>{`${
            trimType.TrimType === "Customize" ? "Customize URL" : "Trim URL"
          }`}</span>
          , I agree with the Terms of Service, Privacy Policy and Use of Cookies
        </p>
      </form>
    </main>
  );
};

export default Trim;
