import React from "react";
import './skills.css'
import checkmarkdark from "../assets/checkmark-dark.svg";
import checkmarklight from "../assets/checkmark-light.svg";
import SkillList from "./SkillList";
import { useTheme } from "../Theme/ThemeContext";
function Skills() {
  const {theme,toggleTheme}=useTheme();
  const checkmark=theme==="light"?checkmarklight:checkmarkdark;
  return (
    <section className="skills">
      <h1>Skills</h1>
      <div className="skilllist">
        <SkillList src={checkmark} skill="HTML" />
        <SkillList src={checkmark} skill="CSS" />
        <SkillList src={checkmark} skill="JavaScript" />
        <SkillList src={checkmark} skill="ReactJS" />
      </div>
      <hr />
      <div className="skilllist">
        <SkillList src={checkmark} skill="Java" />
        <SkillList src={checkmark} skill="Java8" />
        <SkillList src={checkmark} skill="Spring Boot" />
        <SkillList src={checkmark} skill="APIs" />
        <SkillList src={checkmark} skill="OOPS" />
      </div>
      <hr />
      <div className="skilllist">
      <SkillList src={checkmark} skill="MySQL" />
      <SkillList src={checkmark} skill="Git" />
      <SkillList src={checkmark} skill="Postman" />
      <SkillList src={checkmark} skill="Intellij IDEA" />
      </div>      
    </section>
  );
}

export default Skills;