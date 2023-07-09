import "../styles/howitworks.css";

const HowItWorks = () => {
  return (
    <main className="how-it-works">
      <h2>How it Works</h2>
      <p>
        Welcome to this page! We have provided two convinient features: URL
        Shortening and the availabily of previous links shortened. Here's how it
        all works:
      </p>
      <h3>URL Shortening:</h3>
      <ol>
        <li>
          Register and Login: Make sure you have an account and if you do, stay
          login to use service.
        </li>
        <li>
          Paste your long URL: Start by copying and pasting the long URL that
          you want to shorten into the provided input box on the homepage.
        </li>
        <li>
          Generate a short link: Click on the "Generate Link" button, and our
          system will automatically generate a unique and shortened URL for you.
        </li>
        <li>
          Copy the shortened URL: Once generated, you will see the shortened URL
          displayed in the input box below the "Generate Link" button. Simply
          click the "Copy" button to quickly copy it to your clipboard.
        </li>
      </ol>
    </main>
  );
};

export default HowItWorks;
