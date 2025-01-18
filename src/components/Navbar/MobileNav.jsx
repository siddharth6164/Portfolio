import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./mobilenav.css";
import resume from "../../assets/SIDDHARTH_SINGH.pdf"
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
              <ScrollLink to="contact">
                <a className="menu-item">Contact Me</a>
              </ScrollLink>
            </li>
            <a href={resume} download>
            <button className="contect-btn">
              Hire Me
            </button>
              </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
