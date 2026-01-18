import React from "react";
import DATA from "../data";

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <h2 className="heading">Skills</h2>
      <div className="card">
        <ul id="softSkills" className="skills-list flex-center gap">
          {DATA.soft_skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
