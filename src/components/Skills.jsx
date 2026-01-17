import React from "react";
import DATA from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faComments,
  faPeopleGroup,
  faHandshake,
  faPersonRunning,
  faLightbulb,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faComments,
  faPeopleGroup,
  faHandshake,
  faPersonRunning,
  faLightbulb,
  faClock
);

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <h2>Skills</h2>
      <div className="card">
        <ul id="softSkills" className="skills-list flex-center gap">
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
