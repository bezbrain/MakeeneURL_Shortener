import "../styles/trim.css";

const Trim = () => {
  return (
    <main className="trim" id="get-url">
      <form id="try-for-free">
        <input type="text" placeholder="Paste original URL here" />
        <div className="change-act">
          <select name="" id="">
            <option value="">Choose </option>
            <option value="Trim">Trim</option>
            <option value="Customize">Customize</option>
          </select>
          <input type="text" placeholder="About to Trim" />
        </div>
        <button>Trim URL</button>
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
