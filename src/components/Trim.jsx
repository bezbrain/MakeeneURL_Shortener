import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context";
import "../styles/trim.css";
import axios from "axios";

/* ================ */
// The Trim Component
const Trim = () => {
  const {
    originalLink,
    setOriginalLink,
    generatedResult,
    setGeneratedResult,
    loginUserId,
    trimcompErrorMsg,
    setTrimcompErrorMsg,
    urlObj,
    setUrlObj,
  } = useGlobalContext();

  const getToken = localStorage.getItem("authToken"); // Get the auth token from local storge

  const handleGenerateLink = async (e) => {
    e.preventDefault();
    // Check if logged in
    if (getToken) {
      if (!originalLink) {
        // console.log("Pls enter original URL");
        setTrimcompErrorMsg("Pls enter original Link");
        setTimeout(() => {
          setTrimcompErrorMsg("");
        }, 3000);
        return;
      }
      try {
        setTrimcompErrorMsg("Generating Link...");
        const userIdAndOriginalLink = {
          createdBy: loginUserId,
          originalLink: originalLink,
        };
        const { data } = await axios.post(
          "http://localhost:9000/",
          userIdAndOriginalLink
        );
        console.log(data.link.fullLink);
        setGeneratedResult(data.link.fullLink);
        setOriginalLink("");
        setTrimcompErrorMsg("");
      } catch (error) {
        console.log(error.message);
      }
    } else {
      // Check if logged out
      setTrimcompErrorMsg("Please, login to use service");
      setTimeout(() => {
        setTrimcompErrorMsg("");
      }, 3000);
    }
  };

  return (
    <main className="trim" id="get-url">
      <form id="try-for-free">
        <p>{trimcompErrorMsg}</p>
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
