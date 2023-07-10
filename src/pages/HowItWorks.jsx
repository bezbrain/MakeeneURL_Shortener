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
          click the "Copy" button to easily copy it to your clipboard.
        </li>
      </ol>
      <h3>Availability of Previous Links Shortened:</h3>
      <ol>
        <li>
          Access the previous links page: On our website, we offer a convenient
          feature that allows you to access all your previously shortened links
          in one place. To do this, navigate to the "My URLs" page from the
          navigation bar..
        </li>
        <li>
          Option to Delete Previous Link: Click the delect icon to delete links
          you do not want in the storage any longer. Please note that if a link
          is deleted, it can not be retrieved.
        </li>
      </ol>
    </main>
  );
};

export default HowItWorks;
