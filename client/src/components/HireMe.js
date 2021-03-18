import React from "react";
import { Link } from "react-router-dom";
import "../styles/button.css";

function HireMe() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        margin: "auto",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: "170px" /* width of button */,
        height: "50px" /* height of button */,
      }}>
      <Link to="/signup">
        <button className="hire-btn">Hire Me</button>
      </Link>
    </div>
  );
}

export default HireMe;
