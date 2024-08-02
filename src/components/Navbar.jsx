import { HashLink } from "react-router-hash-link";
import "./style.css";

export default function Navbar() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -85;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <a href="/" className="brand-link">
            👋 Hi, I'm Yucheng Tu
          </a>
        </div>
        <div className="nav-links" id="example-navbar-danger">
          <ul className="nav-list">
            <li className="nav-item">
              <HashLink
                smooth
                to="#education"
                scroll={(el) => scrollWithOffset(el)}
                className="nav-link"
              >
                <span className="nav-text">🎓 Education Backgrounds</span>
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="#project"
                scroll={(el) => scrollWithOffset(el)}
                className="nav-link"
              >
                <span className="nav-text">📑 Projects</span>
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="#skill"
                scroll={(el) => scrollWithOffset(el)}
                className="nav-link"
              >
                <span className="nav-text">🌟 Skills</span>
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="#experience"
                scroll={(el) => scrollWithOffset(el)}
                className="nav-link"
              >
                <span className="nav-text">💼 Work Experience</span>
              </HashLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-text"
                href="Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                📥 Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
