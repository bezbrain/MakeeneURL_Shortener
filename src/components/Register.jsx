import "../styles/reglogin.css";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import Message from "./Message";

const Register = () => {
  const {
    setToggleModal,
    setShowRegLogin,
    regName,
    setRegName,
    regEmail,
    setRegEmail,
    regPassword,
    setRegPassword,
    createUserWithEmailAndPassword,
    auth,
    isSuccess,
    setIsSuccess,
    setIsFailure,
    msgFromServer,
    setMsgFromServer,
    extratingErrorMsg,
  } = useGlobalContext();

  const handleRegisterBtn = async (e) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword) {
      //   console.log("I cannot be empty");
      setIsFailure(true);
      setIsSuccess(false);
      setTimeout(() => {
        setIsFailure(false);
      }, 3000);
    } else {
      try {
        await createUserWithEmailAndPassword(auth, regEmail, regPassword);
        setIsSuccess(true);
        setTimeout(() => {
          setShowRegLogin(false); //Go to login form
        }, 4000);
        setRegName("");
        setRegEmail("");
        setRegPassword("");
        setTimeout(() => {
          setIsSuccess(false); //Remove success message
        }, 4000);
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
      <main className="register">
        <FaTimes
          className="close-modal-icon"
          onClick={() => setToggleModal(false)}
        />
        <form>
          <h2>Register</h2>
          {isSuccess ? (
            <Message message="Registration Successful" />
          ) : (
            <Message message="No field should be empty" />
          )}
          <input
            type="text"
            placeholder="Username"
            value={regName}
            onChange={(e) => setRegName(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="Email Address"
            value={regEmail}
            onChange={(e) => setRegEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={regPassword}
            onChange={(e) => setRegPassword(e.target.value)}
          />
          <br />
          <button onClick={handleRegisterBtn}>Register</button>
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
