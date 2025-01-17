import React, { useState } from "react";
import "./navbar.css";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
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
            <button className="contect-btn" onClick={()=>{}}>
              Hire Me
            </button>
          </ul>
          <button class="menu-btn" onClick={toggleMenu}>
            <span class="material-symbols-outlined">
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
