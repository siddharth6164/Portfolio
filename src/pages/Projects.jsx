import React from "react";
import "./project.css";
import tourimg from "../assets/tour_img.png";
import techimg from "../assets/teaching.png";
function Projects() {
  return (
    <section id="project" className="project-container">
      <h5>Project</h5>
      <div className="project-content">
        <a href="https://travelworldbysid.netlify.app/" target="_blank">
          <div className="project-card">
            <img src={tourimg} alt="" />
            <div className="vertical"></div>
            <p>Tour Management</p>
          </div>
        </a>
        <a href="https://github.com/siddharth6164/Basic_Topic_React" target="_blank">
          <div className="project-card">
            <img src={techimg} alt="" />
            <div className="vertical"></div>
            <p>React Hook Concepts</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
