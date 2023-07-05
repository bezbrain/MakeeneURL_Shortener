import Login from "../components/Login";
import Register from "../components/Register";
import { useGlobalContext } from "../context";
import "../styles/reglogin.css";

const RegLogin = () => {
  const { toggleModal, showRegLogin } = useGlobalContext();

  return (
    <main
      className={`reg-and-login ${
        toggleModal ? "add-modal-css" : "initial-modal-css"
      }`}
    >
      {!showRegLogin && <Login />}
      {showRegLogin && <Register />}
    </main>
  );
};

export default RegLogin;
