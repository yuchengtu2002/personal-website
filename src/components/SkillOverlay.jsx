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
        <FontAwesomeIcon icon={skill.icon} className="skill-overlay-icon" />
        <h2 className="skill-overlay-title">{skill.name}</h2>
        <div className="skill-overlay-description">
          <p>{skill.details.description}</p>
          <ul>
            {skill.details.useCases.map((useCase, index) => (
              <li key={index}>{useCase}</li>
            ))}
          </ul>
          {skill.details.note && <p>{skill.details.note}</p>}
        </div>
      </div>
    </div>
  );
}
