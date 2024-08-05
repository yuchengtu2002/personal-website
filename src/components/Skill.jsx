import React from "react";
import { 
  faNode, 
  faPython, 
  faJsSquare, 
  faHtml5, 
  faCss3Alt, 
  faGitSquare, 
  faReact
} from "@fortawesome/free-brands-svg-icons";
import { 
  faFileExcel, 
  faCode, 
  faChalkboardUser, 
  faCube, 
  faDatabase, 
  faLayerGroup, 
  faClapperboard, 
  faC, 
  faMicrochip, 
  faTable, 
  faFileCsv, 
  faTerminal
} from "@fortawesome/free-solid-svg-icons";
import SkillSection from "./SkillSection";
import "./style.css";

export default function Skill() {
  return (
    <div id="skill" className="skill-container">
      <h2 className="skill-heading">
        My Skills
      </h2>
      <h3 className="skill-subheading">
        **Clicking** on a skill will show its function and how I've implemented it.
      </h3>

      <div className="skill-sections">
        <SkillSection
          title="💻 Coding Languages"
          skills={[
            { 
              name: "Python", 
              icon: faPython,
              details: {
                description: "Python is a versatile language known for its simplicity and readability. It's widely used in web development, data science, artificial intelligence, and more. I used Python for",
                useCases: [
                  "building neural networks and deep learning models during the HRCA project",
                  "Along with PyQt, developed desktop applications for live-swallow plotting and analysis.",
                  "Data analysis and visualization with libraries like Pandas and Matplotlib"
                ],
                note: "Please see \"HRCA Project\" for more details."
              }
            },
            { 
              name: "JavaScript", 
              icon: faJsSquare,
              details: {
                description: "JavaScript is a core technology of the web, enabling interactive web pages. It is the backbone of modern web applications, allowing for dynamic content and interactions.",
                useCases: [
                  "Creating interactive web pages using React frameworks",
                  "^ https://utxtendedreality.github.io/ and this website",
                  "Building backend for the website applications with Node.js",
                ],
                note: ""
              }
            },
            { 
              name: "C", 
              icon: faC,
              details: {
                description: "C is a powerful general-purpose programming language. It is used in system programming, embedded systems, and performance-critical applications due to its efficiency and control over system resources.",
                useCases: [
                  "Learning the course APS105 at UofT",
                  "Building a simple reversi game and implementing a simple cpu to play against",
                  "Building Hardware Applications with Assembly Language"
                ],
                note: ""
              }
            },
            { 
              name: "C++", 
              icon: faCode,
              details: {
                description: "C++ is an extension of C that provides object-oriented features. It is used in competitive programming, game development, and high-performance applications.",
                useCases: [
                  "Game development along with SDL2 Library (See project: TD Game)",
                  "Developing GIS Application for ECE297 (See project: Map Application)",
                  "General purpose programming"
                ],
                note: ""
              }
            },
            { 
              name: "SQL", 
              icon: faDatabase,
              details: {
                description: "SQL is essential for managing and querying relational databases. It is used for data manipulation, retrieval, and storage across various industries.",
                useCases: [
                  "Querying and managing data in relational databases",
                ],
                note: ""
              }
            },
            { 
              name: "Verilog", 
              icon: faMicrochip,
              details: {
                description: "Verilog is a hardware description language used to model electronic systems. It is widely used in digital circuit design and simulation.",
                useCases: [
                  "Designing and simulating digital circuits for FPGA on Quartus",
                  "Developing FPGA designs - the 24 Game",
                ],
                note: "I was first introduced to the language in ECE241 at UofT"
              }
            },
            { 
              name: "HTML", 
              icon: faHtml5,
              details: {
                description: "HTML is the standard markup language for creating web pages. It is used to structure web content and ensure accessibility and responsiveness.",
                useCases: [
                  "Creating web page layouts and structures",
                  "Integrating multimedia content into web pages",
                  "Creating the two websites: https://utxtendedreality.github.io/ and this website",
                ],
                note: ""
              }
            },
            { 
              name: "CSS", 
              icon: faCss3Alt,
              details: {
                description: "CSS is used to style web pages. It is responsible for the visual presentation of web content, enabling designs to be responsive and visually appealing.",
                useCases: [
                  "Styling web pages with responsive designs",
                  "Creating animations and transitions",
                  "Creating the two websites: https://utxtendedreality.github.io/ and this website",
                ],
                note: ""
              }
            },
          ]}
        />

        <SkillSection
          title="📚 Libraries / Frameworks"
          skills={[
            { 
              name: "React", 
              icon: faReact,
              details: {
                description: "React is a JavaScript library for building user interfaces. It is known for its component-based architecture, making it ideal for building dynamic web applications.",
                useCases: [
                  "Building reusable UI components",
                  "Implementing state management",
                  "Developing single-page applications (SPAs) like this website",
                ],
                note: ""
              }
            },
            { 
              name: "NodeJs", 
              icon: faNode,
              details: {
                description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used for building scalable server-side applications and APIs.",
                useCases: [
                  "Building RESTful APIs",
                  "Creating server-side logic for web applications such as utxtendedreality.github.io",
                ],
                note: ""
              }
            },
            { 
              name: "MongoDB", 
              icon: faDatabase,
              details: {
                description: "MongoDB is a NoSQL database known for its flexibility and scalability. It is commonly used in modern web applications for its ability to handle large amounts of unstructured data.",
                useCases: [
                  "Storing and querying JSON-like documents",
                  "Storing user data, logs, and post details for utxtendedreality.github.io",
                ],
                note: ""
              }
            },
            { 
              name: "PyTorch", 
              icon: faChalkboardUser,
              details: {
                description: "PyTorch is an open-source machine learning library. It is widely used for deep learning research and building neural networks due to its flexibility and ease of use.",
                useCases: [
                  "Building and training neural networks such as CNNs, RNNs, Transformers and Hybrid models for HRCA project",
                  "Performing research in deep learning and AI",                ],
                note: ""
              }
            },
            { 
              name: "PyQt", 
              icon: faLayerGroup,
              details: {
                description: "PyQt is a set of Python bindings for Qt libraries. It is used for developing cross-platform desktop applications with rich user interfaces.",
                useCases: [
                  "Developing GUI applications for desktop platforms",
                  "Building live swallowing plotting and analysis app for HRCA project",
                ],
                note: ""
              }
            },
            { 
              name: "GTK", 
              icon: faCube,
              details: {
                description: "GTK is a toolkit for creating graphical user interfaces. It is widely used for developing Linux applications with intuitive user interfaces.",
                useCases: [
                  "Creating native Linux applications with GUIs for ECE297 project",
                  "Developing software with a focus on accessibility",
                ],
                note: ""
              }
            },
            { 
              name: "NumPy", 
              icon: faTable,
              details: {
                description: "NumPy is a fundamental package for numerical computing in Python. It provides support for arrays, matrices, and high-level mathematical functions.",
                useCases: [
                  "Performing numerical computations efficiently for machine learning purposes",
                  "Handling large datasets with array operations",
                  "Developing mathematical models and simulations"
                ],
                note: ""
              }
            },
            { 
              name: "Pandas", 
              icon: faFileCsv,
              details: {
                description: "Pandas is a fast, powerful data analysis and manipulation library for Python. It provides data structures and functions needed to clean, analyze, and visualize data.",
                useCases: [
                  "Cleaning and processing large datasets",
                  "Performing data analysis and visualization",
                  "Creating time series analyses and reports"
                ],
                note: ""
              }
            },
          ]}
        />

        <SkillSection
          title="🔧 Tools"
          skills={[
            { 
              name: "Git", 
              icon: faGitSquare,
              details: {
                description: "Git is a distributed version control system. It is essential for version control, collaborating on projects, and maintaining code history in software development.",
                useCases: [
                  "Managing code repositories and versions for projects",
                  "Collaborating with teams using branches and merges",
                  "Tracking and resolving issues with commit histories"
                ],
                note: ""
              }
            },
            { 
              name: "Shell", 
              icon: faTerminal,
              details: {
                description: "Shell scripting allows automation of tasks in Unix-based systems. It is used to automate workflows, manage system tasks, and streamline development processes.",
                useCases: [
                  "Automating system maintenance tasks",
                  "Creating deployment scripts for applications",
                  "Managing server configurations and setups"
                ],
                note: ""
              }
            },
            { 
              name: "Excel", 
              icon: faFileExcel,
              details: {
                description: "Excel is a powerful tool for data analysis and visualization. It is used to organize data, create charts, and perform complex calculations.",
                useCases: [
                  "Creating financial models and forecasts",
                  "Visualizing data with charts and graphs",
                  "Analyzing datasets with pivot tables"
                ],
                note: ""
              }
            },
            { 
              name: "Video Editing", 
              icon: faClapperboard,
              details: {
                description: "Editing and producing high-quality video content with advanced editing features.",
                useCases: [
                  "Editing and producing video content (such as the demo videos above)",
                  "Applying advanced effects and transitions",
                  "Managing and organizing media projects"
                ],
                note: ""
              }
            },
          ]}
        />

        <p className="skill-footer">
          ... And this list is still growing!
        </p>
      </div>
    </div>
  );
}
