import React from "react";
import { Link } from "react-router-dom";
import "../styles/button.css";
import "../styles/header.css";

function Header() {
  const logOut = () => {
    localStorage.clear();
    refreshPage();
  };

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
    console.log("page to reload");
  }

  return (
    <div className="Header">
      <div className="Logo">
        <Link to="/" onClick={refreshPage}>
          <img
            src="https://laravelg.themes-coder.net/images/media/2020/04/SnFnt28605.png"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        {localStorage.getItem("token") ? (
          <Link to="/">
            <button className="login-btn" onClick={logOut}>
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        )}
        {localStorage.getItem("token") ? (
          <Link to="/ProfileUser/">
            <button className="login-btn" style={{ marginLeft: 10 }}>
              Profile
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
