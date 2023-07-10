import "../styles/error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="error">
      <img src="../../Images/Error_Img.jpeg" alt="Error" />
      <h2>404 - PAGE NOT FOUND</h2>
      <p>
        This page you are looking for might have been removed, had its name
        changed or temporarily unavailable
      </p>
      <Link to="/">GO TO HOMEPAGE</Link>
    </main>
  );
};

export default Error;
