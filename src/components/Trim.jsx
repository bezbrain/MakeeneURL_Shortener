import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "../context";
import "../styles/trim.css";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

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

  const genLinkBtnRef = useRef(null); //Hook to access the text content of "Generate Link" btn

  // State check if link is generating
  const [isGenerating, setIsGenerating] = useState(false);

  const [copyBtnContent, setCopyBtnContent] = useState("Copy");

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

  const handleCopy = (e) => {
    e.preventDefault();
    console.log("I am copied");
    setCopyBtnContent("Copied");
    setTimeout(() => {
      setCopyBtnContent("Copy");
    }, 3000);
  };

  return (
    <main className="trim" id="get-url">
      <AnimatePresence>
        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          exit={{ width: 0 }}
        >
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
            <div className="short-llnk-and-copy-btn">
              <input
                type="text"
                placeholder="Get generated link here"
                value={generatedResult}
                onChange={(e) => setGeneratedResult(e.target.value)}
              />
              <CopyToClipboard text={generatedResult}>
                <button onClick={handleCopy}>{copyBtnContent}</button>
              </CopyToClipboard>
            </div>
            <p>
              By clicking <span>Generate Link</span>, I agree with the Terms of
              Service, Privacy Policy and Use of Cookies
            </p>
          </form>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Trim;
