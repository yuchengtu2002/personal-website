import React from "react";
import ProjectCard from "./ProjectCard";
import "./style.css";

export default function Project() {
  return (
    <div id="project" className="project-container">
      <h2 className="project-heading">My Past Projects</h2>

      <div className="project-cards">
        {[
          // Modify or add project cards here
          {
            img: "hrca_project.png",
            title: "HRCA Machine-Learning Research Project",
            time: "2024.5 - 2024.9",
            descriptions: [
              "Research Project ( Summer 2024 ). Collaborated with the Hospital and the University of Toronto.",
              "Developed PyTorch deep learning models (CNN, RNN, Transformers, Hybrid) to classify swallowing events as normal or abnormal using raw time-sequence data. Outperformed state-of-the-art models by 8% in accuracy.",
              "Built a user-friendly PC application with Python and PyQt to connect with the HRCA device for real-time swallowing signal monitoring and analysis."
            ],
            tags: [
              "Python",
              "Scikit-learn",
              "Deep Learning",
              "Neural Networks",
              "PyQt",
              "PyTorth",
            ],
          },
          {
            img: "ece297.png",
            title: "Geographic Information System - Map Application",
            time: "2024.1 - 2024.4",
            descriptions: [
              "Group project ( ECE297: Communication and Design ).",
              "In a group of 3, developed a OpenStreetMap-based map application using C++ and Glade framework. Responsible for code generation, testing, and debugging, plus designing the user interface.",
              "Developed a solution to the travelling courier problem using Genetic Algorithm. Solution quality ranked 1/77 in the course.",
            ],
            tags: [
              "C++",
              "Glade",
              "Database",
              "Data Structures",
              "Algorithms", 
              "APIs",
              "GUI Design",
            ],
          },
          {
            img: "utxr.png",
            title: "Club Website",
            time: "2023.8 - 2023.9",
            descriptions: [
              "In a group of 2, developed a Full-Stack website for a club using HTML&CSS, React, Nodejs, and JavaScript.",
              "Supported features such as user registration, login, online forms with email confirmation, and posting management.",
            ],
            tags: ["Javascipt", "Nodejs", "React", "HTML&CSS", "Web Development","Full-Stack"],
          },
          {
            img: "fpga.jpeg",
            title: "FPGA-based 24 Game",
            time: "2023.9 - 2023.12",
            descriptions: [
              "Implemented the classic 24 game based on FPGA as an academic project, using Verilog, Quartus and ModelSim, and runs on DE1-SoC computer.",
              "Integrated multiple interfaces and outputs, including VGA display, keyboard input and audio output.",
            ],
            tags: ["Verilog", "ModelSim", "Quartus", "Digital Design"],
            demoName1: "Demo Video: 24 Game",
            demoLink1: "https://www.youtube.com/watch?v=mSOiU0JPdlo", 
            demoName2: "Source Code",
            demoLink2: "https://github.com/yuchengtu2002/fpga_24Game"
          },
          {
            img: "sound_processor.png",
            title: "FPGA-based 24 Game",
            time: "2024.3 - 2024.4",
            descriptions: [
              "Developed an audio processing system in C and Assembly that records, processes, and plays back sound using a DE1-SoC board. ",
              "Implemented real-time audio capture with customizable effects such as reverse, chipmunk, and echo, leveraging VGA and LED interfaces for intuitive control and feedback.",
              "Enabled seamless audio manipulation with user-friendly controls, allowing dynamic effect changes.",
            ],
            tags: ["C", "Assembly Language", "Hardware Integration", "Digital Design"],
            demoName1: "Source Code",
            demoLink1: "https://github.com/yuchengtu2002/Audio_Processor", 
          },
        ].map((item, index) => (
          <ProjectCard
            key={index}
            img={item.img}
            title={item.title}
            time={item.time}
            descriptions={item.descriptions}
            tags={item.tags}
            demoName1={item.demoName1} 
            demoLink1={item.demoLink1} 
            demoName2={item.demoName2} 
            demoLink2={item.demoLink2} 
          />
        ))}
      </div>
      <p className="skill-footer">
        Plus this website... And many other smaller academic & personal projects!
      </p>
    </div>
  );
}
