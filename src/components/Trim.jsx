import { useEffect, useRef } from "react";
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
    addDoc,
    colRef,
    onSnapshot,
    urlArrays,
    setUrlArrays,
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
        trimURLFunc();
        return;
      }
      console.log("Write code to input customized or trimmed URL here");
    } else {
      // Check if logged out
      console.log("Please, Login to use service");
    }
  };

  /* ================== */
  // Function to Trim URL
  const trimURLFunc = async () => {
    let trimOriginalUrl;
    if (originalUrl.length <= 100) {
      trimOriginalUrl = originalUrl.slice(0, 30);
      await addDoc(colRef, {
        original: originalUrl,
        short: trimOriginalUrl,
      });
      setTrimResult(trimOriginalUrl);
    } else {
      trimOriginalUrl = originalUrl.slice(0, 40);
      await addDoc(colRef, {
        original: originalUrl,
        short: trimOriginalUrl,
      });
      setTrimResult(trimOriginalUrl);
    }
  };

  /* ================== */
  // Retrieve Data from db
  const getData = async () => {
    onSnapshot(colRef, (snapshot) => {
      const urlData = snapshot.docs.map((each) => {
        return {
          ...each.data(),
          id: each.id,
        };
      });
      console.log(urlData);
      setUrlArrays(urlData);
      if (urlArrays) {
        window.location.href = urlArrays[0].original;
      } else {
        console.log("Redirection not found");
      }
    });
  };

  useEffect(() => {
    getData();
  }, [trimResult]);

  /* ====================== */
  // Function to Customize URL
  const customizeURLFunc = () => {
    //
  };

  // // Assuming you have initialized Firebase and obtained a reference to the database
  // var database = firebase.database();

  // // Function to store the link mapping
  // function storeLinkMapping(inputLink, redirectionLink) {
  //   var linkMappingsRef = database.ref("linkMappings");
  //   linkMappingsRef.child(inputLink).set(redirectionLink);
  // }

  // // Assuming you have initialized Firebase and obtained a reference to the database
  // var database = firebase.database();

  // // Function to handle link redirection
  // function redirectToRedirectionLink(inputLink) {
  //   var linkMappingsRef = database.ref("linkMappings");
  //   linkMappingsRef.child(inputLink).once("value", function (snapshot) {
  //     var redirectionLink = snapshot.val();
  //     if (redirectionLink) {
  //       window.location.href = redirectionLink;
  //     } else {
  //       // Handle case when redirection link is not found
  //     }
  //   });
  // }

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
