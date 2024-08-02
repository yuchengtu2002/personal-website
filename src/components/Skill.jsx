import React from "react";
import { faNode, faPython, faJsSquare, faHtml5, faCss3Alt, faGitSquare, faReact,  } from "@fortawesome/free-brands-svg-icons";
import { faFileExcel, faCode, faChalkboardUser, faCube, faDatabase, faLayerGroup, faClapperboard, faC, faMicrochip, faTable, faFileCsv, faTerminal} from "@fortawesome/free-solid-svg-icons";
import SkillSection from "./SkillSection";
import "./style.css";

export default function Skill() {
  return (
    <div id= "skill" className="skill-container">
      <h2 className="skill-heading">
        My Skills
      </h2>

      <div className="skill-sections">
        <SkillSection
          title="💻 Coding Languages"
          skills={[
            { name: "Python", icon: faPython },
            { name: "Javascript", icon: faJsSquare },
            { name: "C", icon: faC },
            { name: "C++", icon: faCode },
            { name: "SQL", icon: faDatabase },
            { name: "Verilog", icon: faMicrochip },
            { name: "HTML", icon: faHtml5 },
            { name: "CSS", icon: faCss3Alt },
          ]}
        />

        <SkillSection
          title="📚 Libraries / Frameworks"
          skills={[
            { name: "React", icon: faReact },
            { name: "NodeJs", icon: faNode },
            { name: "MongoDB", icon: faDatabase },
            { name: "PyTorch", icon: faChalkboardUser },
            { name: "PyQt", icon: faLayerGroup },
            { name: "GTK", icon: faCube },
            { name: "NumPy", icon: faTable },
            { name: "Pandas", icon: faFileCsv },
          ]}
        />

        <SkillSection
          title="🔧 Tools"
          skills={[
            { name: "Git", icon: faGitSquare },
            { name: "Shell", icon: faTerminal },
            { name: "Excel", icon: faFileExcel },
            { name: "FinalCutPro", icon: faClapperboard },

          ]}
        />

        <p className="skill-footer">
          ... And this list is still growing!
        </p>
      </div>
    </div>
  );
}
