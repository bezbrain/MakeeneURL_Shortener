import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const LogoDesign = () => {
  const { setToggleNav, setCurrentPage } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <div
      className="logo-con"
      onClick={() => {
        navigate("/");
        setToggleNav(false);
        setCurrentPage(""); // Set the state that indicates the current page back to empty
      }}
    >
      <div className="the-logo">
        <h1>MAKEENE</h1>
        <h3>URLShortCus</h3>
      </div>
    </div>
  );
};

export default LogoDesign;
