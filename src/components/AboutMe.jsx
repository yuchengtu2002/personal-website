import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.css";


export default function AboutMe() {
  return (
  <div>
      <div className="about-container">
        <div className="about-content">
          <div className="avatar">
            <LazyLoadImage
              className="avatar-image"
              effect="blur"
              src="my_picture.png"
              alt="my profile photo"
            />
          </div>
          <h2 className="greeting">
            👋 Hello There!
          </h2>
          <p className="introduction">
            I'm Yucheng Tu
          </p>
          {[
            "Welcome to my personal space on the web!",
            "I am a third-year Computer Engineering student at the University of Toronto, passionate about transforming ideas into code and turning innovative solutions into reality.",
            "My academic focus lies in artificial intelligence, software development, and deep learning, where I strive to push the boundaries of technology.",
            "Outside of my studies, I enjoy playing badminton, diving into Nintendo games, and exploring the latest advancements in technology."
          ].map((item, index) => {
            return (
              <p key={index} className="description">
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <div className="contact-bar">
      <div className="contact-container">
        <div className="contact-info">
          <p>Email: <a href="mailto:johnsontu2002@gmail.com">johnsontu2002@gmail.com</a></p>
          <p>Tel: <a href="tel:+12046980545">+12046980545</a></p>
          <p className="address">Toronto, Ontario, Canada</p>
        </div>
        <div className="contact-links">
          <a
            className="font-bold"
            href="https://github.com/yuchengtu2002"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            className="font-bold"
            href="https://www.linkedin.com/in/yucheng-tu-875553278/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
