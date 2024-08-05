import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillOverlay({ skill, onClose }) {
  return (
    <div className="skill-overlay">
      <div className="skill-overlay-content">
        <button className="skill-overlay-close" onClick={onClose}>
          ×
        </button>
        <FontAwesomeIcon
          icon={skill.icon}
          className="skill-overlay-icon"
        />
        <h2 className="skill-overlay-title">{skill.name}</h2>
        <div className="skill-overlay-description">
          <p>
            {`Details about ${skill.name} and its usage. This can be extended to include more comprehensive details as needed for each skill, ensuring users gain valuable insights.`}
          </p>
        </div>
      </div>
    </div>
  );
}
