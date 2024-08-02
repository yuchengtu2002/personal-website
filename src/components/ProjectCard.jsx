import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.css";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <LazyLoadImage
          className="project-image"
          src={props.img}
          alt={props.title}
          effect="blur"
        />
      </div>
      <div className="project-content">
        <div className="project-title">{props.title}</div>
        <p className="project-time">{props.time}</p>
        {props.descriptions &&
          props.descriptions.map((des, index) => (
            <p key={index} className="project-description">
              {"- " + des}
            </p>
          ))}
      </div>
      <div className="project-tags">
        {props.tags &&
          props.tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {"#" + tag}
            </span>
          ))}
      </div>
      <div className="project-demo">
        {props.demoName && (
          <a
            className="project-demo-link"
            target="_blank"
            href={props.demoLink}
            rel="noreferrer"
          >
            {props.demoName}
          </a>
        )}
      </div>
    </div>
  );
}
