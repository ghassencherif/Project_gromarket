import React from "react";
import { Link } from "react-router-dom";
import "../styles/button.css";
import "../styles/header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <Link to="/">
          <img
            src="https://laravelg.themes-coder.net/images/media/2020/04/SnFnt28605.png"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
