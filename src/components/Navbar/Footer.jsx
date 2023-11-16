import { Box } from "@mui/material";
import React from "react";
import logo from "../../img/logo.svg";
import inst from "../../img/inst.svg";
import twi from "../../img/twi.svg";
import fei from "../../img/fei.png";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <img src={logo} alt="img" />
          <div className="footer-nav">
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Product</h2>
          </div>
          <div className="footer-logo">
            <img src={inst} alt="img" />
            <img src={twi} alt="img" />
            <img src={fei} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
