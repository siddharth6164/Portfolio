import React, { useState } from "react";
import "./mobilenav.css"
function MobileNav({ isOpen, toggleMenu }) {
    
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <h1 className="logo">Siddharth</h1>
          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skill</a>
            </li>
            <li>
              <a className="menu-item">Project</a>
            </li>
            <li>
              <a className="menu-item">Work Experience</a>
            </li>
            <li>
              <a className="menu-item">Contect Me</a>
            </li>
            <button className="contect-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
