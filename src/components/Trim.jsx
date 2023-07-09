import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const genLinkBtnRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const getToken = localStorage.getItem("authToken"); // Get the auth token from local storge

  const handleGenerateLink = async (e) => {
    e.preventDefault();
    // Check if logged in
    if (getToken) {
      if (!originalLink) {
        // console.log("Pls enter original URL");
        setTrimcompErrorMsg("Please enter original Link");
        setTimeout(() => {
          setTrimcompErrorMsg("");
        }, 3000);
        return;
      }
      try {
        setIsGenerating(true);
        genLinkBtnRef.current.textContent = "Generating Link...";
        // Object to be sent to the server
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
        genLinkBtnRef.current.textContent = "Link Generated";
        setIsGenerating(false);
        setTimeout(() => {
          genLinkBtnRef.current.textContent = "Generate Link";
        }, 2000);
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
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ width: 0 }}
        animate={inView ? { width: "100%" } : { width: 0 }}
        // transition={{ duration: 0.5 }}
        exit={{ width: 0 }}
      >
        <main className="trim" id="get-url">
          <form id="try-for-free">
            <p>{trimcompErrorMsg}</p>
            <input
              type="text"
              placeholder="Paste original link here"
              value={originalLink}
              onChange={(e) => setOriginalLink(e.target.value)}
            />
            <button
              onClick={handleGenerateLink}
              ref={genLinkBtnRef}
              className={`${isGenerating ? "add-button-css" : ""}`}
            >
              Generate Link
            </button>
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Trim;
