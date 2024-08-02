import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

export default function SkillSection(props) {
  return (
    <div>
      <p className="skill-section-title">
        {props.title}
      </p>
      <div className="skill-grid">
        {props.skills &&
          props.skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <FontAwesomeIcon icon={skill.icon} className="skill-icon custom-icon-size" />
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}
