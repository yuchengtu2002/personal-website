import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-links">
            <a
              className="font-bold"
              href="https://github.com/yuchengtu2002"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>Github
            </a>
            <a
              className="font-bold"
              href="https://www.linkedin.com/in/yucheng-tu-875553278/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>LinkedIn
            </a>
            <a className="font-bold" href=".">
              <i className="fas fa-file-code"></i>Website
            </a>
          </div>
          <div className="footer-info">
            <p><a href="mailto:johnsontu2002@gmail.com">johnsontu2002@gmail.com</a></p>
            <p><a href="tel:+12046980545">+12046980545</a></p>
          </div>
          <p className = "footer-name">© 2024 Yucheng Tu</p>
        </div>
        
      </div>
    </footer>
  );
}
