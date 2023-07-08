import { useGlobalContext } from "../context";
import "../styles/reglogin.css";
import { FaTimes } from "react-icons/fa";
import Message from "./Message";
import { useEffect } from "react";

const Login = () => {
  const {
    setToggleModal,
    setShowRegLogin,
    email,
    setEmail,
    password,
    setPassword,
    signInWithEmailAndPassword,
    auth,
    isSuccess,
    setIsSuccess,
    setIsFailure,
    setMsgFromServer,
    extratingErrorMsg,
    setIsLogged,
  } = useGlobalContext();

  const handleLoginBtn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      // console.log("Input empty");
      setIsFailure(true);
      setIsSuccess(false);
      setTimeout(() => {
        setIsFailure(false);
      }, 3000);
    } else {
      try {
        const cred = await signInWithEmailAndPassword(auth, email, password);

        console.log(cred.user.uid);

        const userToken = await auth.currentUser.getIdToken();
        localStorage.setItem("authToken", userToken); // Store the authentication token in local storage

        setIsSuccess(true);
        setEmail("");
        setPassword("");
        setTimeout(() => {
          setIsSuccess(false); //Remove success message
          setToggleModal(false); //Remove modal
        }, 3000);
        setIsLogged("Logout");
      } catch (error) {
        console.log(error.message);
        setMsgFromServer(extratingErrorMsg(error.message));
        setTimeout(() => {
          setMsgFromServer("");
        }, 3000);
      }
    }
  };

  return (
    <>
      <main className="login">
        <FaTimes
          className="close-modal-icon"
          onClick={() => setToggleModal(false)}
        />
        <form>
          <h2>Login</h2>
          {isSuccess ? (
            <Message message="Logging in..." />
          ) : (
            <Message message="No field should be empty" />
          )}
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
          <button onClick={handleLoginBtn}>Login</button>
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
