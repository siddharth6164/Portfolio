import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./mobilenav.css";
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
              <ScrollLink to="home">
                <a className="menu-item">Home</a>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="skill">
                <a className="menu-item">Skill</a>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="project">
                <a className="menu-item">Project</a>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="workexp">
                <a className="menu-item">Work Experience</a>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contect">
                <a className="menu-item">Contect Me</a>
              </ScrollLink>
            </li>
            <button
              className="contect-btn"
              onClick={() => {
                const link = document.createElement("a");
                link.href = { resume };
                link.download = "Siddharht_Singh.pdf";
                link.click();
              }}
            >
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
