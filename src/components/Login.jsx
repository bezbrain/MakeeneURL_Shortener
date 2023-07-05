import { useGlobalContext } from "../context";
import "../styles/reglogin.css";
import { FaTimes } from "react-icons/fa";

const Login = () => {
  const {
    setToggleModal,
    setShowRegLogin,
    email,
    setEmail,
    password,
    setPassword,
  } = useGlobalContext();
  return (
    <>
      <main className="login">
        <FaTimes
          className="close-modal-icon"
          onClick={() => setToggleModal(false)}
        />
        <form>
          <h2>Login</h2>
          <p>Error/Success Message</p>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button>Login</button>
          <div className="dont-have-acc-con">
            <p>Don't have an account?</p>
            <p onClick={() => setShowRegLogin(true)}>Sign up</p>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
