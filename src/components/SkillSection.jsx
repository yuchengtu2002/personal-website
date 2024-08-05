import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import SkillOverlay from "./SkillOverlay"; 

export default function SkillSection(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCloseOverlay = () => {
    setActiveIndex(null); // Reset the active index when closing the overlay
  };

  return (
    <div>
      <p className="skill-section-title">{props.title}</p>
      <div className="skill-grid">
        {props.skills &&
          props.skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              onClick={() => handleCardClick(index)}
            >
              <FontAwesomeIcon
                icon={skill.icon}
                className="skill-icon custom-icon-size"
              />
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
      </div>

      {activeIndex !== null && (
        <SkillOverlay
          skill={props.skills[activeIndex]}
          onClose={handleCloseOverlay}
        />
      )}
    </div>
  );
}
