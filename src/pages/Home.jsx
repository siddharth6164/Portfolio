import React from "react";
import "./home.css";
import image1 from "../assets/Image1.jpg";
import themeIcon from "../assets/sun.svg";
import leetcode from "../assets/leetcode.svg";
import github from "../assets/github-light.svg";
import gfg from "../assets/gfg.svg";
import CV from "../assets/Resume.pdf";
import { useTheme } from "../Theme/ThemeContext";

function Home() {
  const {theme,toggleTheme}=useTheme();
  return (
    <section id="home">
      <div>
        <img className="image1" src={image1} alt="siddharth singh"/>
        <img className="" src={themeIcon} alt="siddharth singh" onClick={toggleTheme}/>
      </div>
      <div className="info">
        <h1>Siddharth Singh</h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://leetcode.com/u/Z3J85eIxgw/" target="_blank">
            <img src={leetcode} alt="" srcset="" className="icon" />
          </a>
          <a href="https://github.com/siddharth6164" target="_blank">
            <img src={github} alt="" srcset="" className="icon" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/siddhu33singh1/"
            target="_blank"
          >
            <img src={gfg} alt="" srcset="" className="icon" />
          </a>
        </span>
        <p>With a passion for Developing modern React web apps for commercial businesses.</p>
        <a href={CV} download>
          <button className="resune_btn">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Home;
