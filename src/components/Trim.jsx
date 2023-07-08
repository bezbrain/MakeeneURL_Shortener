import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import "../styles/trim.css";

/* ================ */
// The Trim Component
const Trim = () => {
  const {
    originalLink,
    setOriginalLink,
    generatedResult,
    setGeneratedResult,
    urlArrays,
    setUrlArrays,
  } = useGlobalContext();

  const getToken = localStorage.getItem("authToken"); // Get the auth token from local storge

  const handleGenerateLink = (e) => {
    e.preventDefault();

    // Check if logged in
    if (getToken) {
      if (!originalLink) {
        console.log("Pls enter original URL");
        return;
      }
      console.log("Write code to input customized or trimmed URL here");
    } else {
      // Check if logged out
      console.log("Please, Login to use service");
    }
  };

  return (
    <main className="trim" id="get-url">
      <form id="try-for-free">
        <input
          type="text"
          placeholder="Paste original link here"
          value={originalLink}
          onChange={(e) => setOriginalLink(e.target.value)}
        />
        <button onClick={handleGenerateLink}>Generate Link</button>
        <br />
        <input
          type="text"
          placeholder="Get generated link here"
          value={generatedResult}
          onChange={(e) => setGeneratedResult(e.target.value)}
        />
        <p>
          By clicking <span>Generate Link</span>, I agree with the Terms of
          Service, Privacy Policy and Use of Cookies
        </p>
      </form>
    </main>
  );
};

export default Trim;
