import { useGlobalContext } from "../context";
import "../styles/reglogin.css";

const Message = ({ message }) => {
  const { isSuccess, isFailure } = useGlobalContext();

  return (
    <>
      {isSuccess && (
        <p className={`${isSuccess ? "add-success-message" : ""}`}>{message}</p>
      )}
      {isFailure && (
        <p className={`${isFailure ? "add-failure-message" : ""}`}>{message}</p>
      )}
    </>
  );
};

export default Message;
