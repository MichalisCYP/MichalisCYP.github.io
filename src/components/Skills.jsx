import React from "react";
import DATA from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <h2>Skills</h2>
      <div className="card">
        <ul id="softSkills" className="list">
          {DATA.soft_skills.map((skill) => (
            <li key={skill.text}>
              <FontAwesomeIcon icon={skill.icon} />
              {skill.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
