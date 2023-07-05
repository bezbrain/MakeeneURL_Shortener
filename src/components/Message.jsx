import { useGlobalContext } from "../context";
import "../styles/reglogin.css";

const Message = ({ message }) => {
  const { isSuccess, isFailure, msgFromServer, setMsgFromServer } =
    useGlobalContext();

  return (
    <>
      {isSuccess && (
        <p className={`${isSuccess ? "add-success-message" : ""}`}>{message}</p>
      )}
      {isFailure && (
        <p className={`${isFailure ? "add-failure-message" : ""}`}>{message}</p>
      )}
      {msgFromServer && <p className="add-failure-message">{msgFromServer}</p>}
    </>
  );
};

export default Message;
