import "../styles/reglogin.css";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Register = () => {
  const { setToggleModal, setShowRegLogin } = useGlobalContext();

  return (
    <>
      <main className="register">
        <FaTimes
          className="close-modal-icon"
          onClick={() => setToggleModal(false)}
        />
        <form>
          <h2>Register</h2>
          <p>Error/Success Message</p>
          <input type="text" placeholder="Username" />
          <br />
          <input type="email" placeholder="Email Address" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button>Register</button>
          <div className="have-acc-con">
            <p>Have an account?</p>
            <p onClick={() => setShowRegLogin(false)}>Sign in</p>
          </div>
        </form>
      </main>
    </>
  );
};

export default Register;
