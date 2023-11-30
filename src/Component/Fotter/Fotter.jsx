import React from "react";
import git from "../../assets/github.png";
import insta from "../../assets/instagram.png";
import linkd from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
import "./Fotter.css";
function Fotter() {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social">
          <img src={insta} alt="" />
          <img src={git} alt="" />
          <img src={linkd} alt="" />
        </div>
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
}

export default Fotter;
