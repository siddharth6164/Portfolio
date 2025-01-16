import React from "react";
import "./header.css";
import { Link as Links } from "react-router-dom";
import { Link } from "react-scroll";
function Header() {
  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "#fff",
          zIndex: 1000,
        }}
      >
        <ul style={{ display: "flex", listStyleType: "none", padding: 10 }}>
          <li style={{ margin: "0 15px" }}>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li style={{ margin: "0 15px" }}>
            <Link to="projects" smooth={true} duration={500}>
              Project
            </Link>
          </li>
          <li style={{ margin: "0 15px" }}>
            <Link to="contact" smooth={true} duration={500} target="_blank">
              Contact
            </Link>
          </li>
          <li>
            <Links to="/about">About</Links>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

