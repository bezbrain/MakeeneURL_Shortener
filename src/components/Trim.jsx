import { useGlobalContext } from "../context";
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

  const getToken = localStorage.getItem("authToken");
  // console.log(getToken);

  const handleTrimTypeChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTrimType({
      ...trimType,
      [name]: value,
    });
    console.log(trimType);
  };

  const handleTrimBtn = (e) => {
    e.preventDefault();
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
            <option value="">Choose </option>
            <option value="Trim">Trim</option>
            <option value="Customize">Customize</option>
          </select>
          <input
            type="text"
            placeholder={`${
              trimType.TrimType === "Customize"
                ? "Type preferred URL"
                : "About to Trim"
            }`}
            value={`${trimType.TrimType === "Customize" ? customizeUrl : ""}`}
            onChange={(e) => setCustomizeUrl(e.target.value)}
          />
        </div>
        <button onClick={handleTrimBtn}>{`${
          trimType.TrimType === "Trim"
            ? "Trim URL"
            : trimType.TrimType === "Customize"
            ? "Customize URL"
            : "Choose Trim-type"
        }`}</button>
        <br />
        <input type="text" placeholder="Get generated URL here" />
        <p>
          By clicking Trim URL, I agree with the Terms of Service, Privacy
          Policy and Use of Cookies
        </p>
      </form>
    </main>
  );
};

export default Trim;
