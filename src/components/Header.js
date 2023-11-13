import React from "react";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="heading-container">
          <img className="img1" src="./img/hamburger.png" alt="" />
          <h1>Recipe App</h1>
        </div>

        <div className="input-container">
          <img className="img2" src="./img/searchicon.png" alt="" />
          <input type="text" placeholder="Search Recipe..."/>
        </div>
      </div>
    </>
  );
}
