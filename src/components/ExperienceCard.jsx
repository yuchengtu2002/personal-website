import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.css";

export default function EducationCard(props) {
  return (
    <div className="education-card">
      <LazyLoadImage
        className="education-image"
        src={props.img}
        alt={props.title}
      />
      <div className="education-content">
        <p className="education-title">{props.title}</p>
        <div>
          <p className="education-role">{props.role}</p>
          <p className="education-time">{props.time}</p>
          {props.descriptions &&
            props.descriptions.map((des, index) => (
              <p key={index} className="education-description">
                {"- " + des}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
