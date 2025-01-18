import React, { useState } from "react";
import "./navbar.css";
import { Link as ScrollLink } from "react-scroll";
import resume from "../../assets/SIDDHARTH_SINGH.pdf"
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
