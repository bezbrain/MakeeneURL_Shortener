import React from "react";
import { useNavigate } from "react-router-dom";

const LogoDesign = () => {
  const navigate = useNavigate();

  return (
    <div className="logo-con" onClick={() => navigate("/")}>
      <div className="the-logo">
        <h1>MAKEENE</h1>
        <h3>URLShortCus</h3>
      </div>
    </div>
  );
};

export default LogoDesign;
