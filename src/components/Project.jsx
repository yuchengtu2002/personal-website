import React from "react";
import ProjectCard from "./ProjectCard";
import "./style.css";

export default function Project() {
  return (
    <div
      id="project"
      className="project-container"
    >
      <h2 className="project-heading">
        My Past Projects
      </h2>

      <div className="project-cards">
        {[
          // Modify or add project cards here
          // To add a new card, copy the entire object enclosed by {}, modify the string content; separate each object with a comma.
          {
            img: "hrca_project.png",
            title: "HRCA Machine-Learning Research Project",
            time: "2024.5 - 2024.9",
            descriptions: [
              "Research project during summer 2024, in collaboration with the Hospital and the University of Toronto.",
              "Integrated PyTorch and machine learning models that are capable of classifying swallowing events as normal or abnormal, then quantifying swallowing severity on a scalable metric.",
              "Created a user-friendly PC application using Python and the PyQt framework to connect with the HRCA device for real-time monitoring and analysis of swallowing signals.",
            ],
            tags: [
              "C++",
              "Python",
              "PyQt",
              "Scikit-learn",
              "Machine Learning",
              "PyTorth",
              "GUI Design",

            ],
          },
          {
            img: "ece297.png",
            title: "Geographic Information System - Map Application",
            time: "2024.1 - 2024.4",
            descriptions: [
              "Group project for ECE297: Communication and Design.",
              "In a group of 3, developed a OpenStreetMap-based map application using C++ and Glade framework, supporting features such as searching and routing.",
              "Responsible for code generation, testing, and debugging. Also contributed to the design of the user interface.",
              "The Travelling Courier Problem's solution using Genetic Algorithm was ranked 1/77 in the course.",
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
              "Implemented the classic 24 game based on FPGA as an academic project, using Verilog, Quartus and ModelSim.",
              "Integrated multiple interfaces and outputs, including VGA display, keyboard input and audio output.",
            ],
            tags: ["Verilog", "ModelSim", "Quartus", "Digital Design"],
          },
        ].map((item, index) => {
          return (
            <ProjectCard
              key={index}
              img={item.img}
              title={item.title}
              time={item.time}
              descriptions={item.descriptions}
              tags={item.tags}
            />
          );
        })}
      </div>
      <p className="skill-footer">
          Plus this website... And many other smaller academic & personal projects!
        </p>
    </div>
  );
}
