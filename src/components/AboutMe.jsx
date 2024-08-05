import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.css";
import GameOverlay from "./GameOverlay"; // Import the new overlay component

export default function AboutMe() {
  // State to manage overlay visibility
  const [showGameOverlay, setShowGameOverlay] = useState(false);

  // Use useEffect to handle disabling and enabling scrolling
  useEffect(() => {
    if (showGameOverlay) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  }, [showGameOverlay]); // Dependency array to trigger effect when showGameOverlay changes

  // Function to toggle the overlay visibility
  const toggleGameOverlay = () => {
    setShowGameOverlay(!showGameOverlay);
  };

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
          ].map((item, index) => {
            return (
              <p key={index} className="description">
                {item}
              </p>
            );
          })}
          <p className="description">
            Outside of my studies, I enjoy playing badminton, diving into <span onClick={toggleGameOverlay} className="clickable-text">video games</span>, and exploring the latest advancements in technology.
          </p>
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

      {/* Render the overlay if showGameOverlay is true */}
      {showGameOverlay && <GameOverlay onClose={toggleGameOverlay} />}
    </div>
  );
}
