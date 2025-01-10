import React from "react";
import './skills.css'
import checkmarkdark from "../assets/checkmark-dark.svg";
import SkillList from "./SkillList";
function Skills() {
  return (
    <section className="skills">
      <h1>Skills</h1>
      <div className="skilllist">
        <SkillList src={checkmarkdark} skill="HTML" />
        <SkillList src={checkmarkdark} skill="CSS" />
        <SkillList src={checkmarkdark} skill="JavaScript" />
        <SkillList src={checkmarkdark} skill="ReactJS" />
      </div>
      <hr />
      <div className="skilllist">
        <SkillList src={checkmarkdark} skill="Java" />
        <SkillList src={checkmarkdark} skill="Java8" />
        <SkillList src={checkmarkdark} skill="Spring Boot" />
        <SkillList src={checkmarkdark} skill="APIs" />
        <SkillList src={checkmarkdark} skill="OOPS" />
      </div>
      <hr />
      <div className="skilllist">
      <SkillList src={checkmarkdark} skill="MySQL" />
      <SkillList src={checkmarkdark} skill="Git" />
      <SkillList src={checkmarkdark} skill="Postman" />
      <SkillList src={checkmarkdark} skill="Intellij IDEA" />
      </div>      
    </section>
  );
}

export default Skills;
