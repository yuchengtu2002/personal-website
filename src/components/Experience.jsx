import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./style.css";

export default function Experience() {
  return (
    <div
      id="experience"
      className="experience-container"
    >
      <h2 className="experience-heading">
        💼 My Work Experience
      </h2>

      <div className="experience-cards">
        {[
          // 在此处修改或新增工作经历卡片
          // 如需新增卡片，复制下方整个被{}包围的对象，修改字符串内容；每个对象用逗号分隔。
          {
            img: "uoft.jpg",
            role: "Summer Research Intern - iMed Lab",
            title: "Univeristy of Toronto",
            time: "2024.5-2024.9",
            descriptions: [
              "Integrated PyTorch and machine learning models that are capable of classifying swallowing events as normal or abnormal, then quantifying swallowing severity on a scalable metric.",
              "Created a user-friendly PC application using Python and the PyQt framework to connect with the HRCA device for real-time monitoring and analysis of swallowing signals.",
            ],
          },
          {
            img: "wisehouse.jpeg",
            role: "Program Manager & Project Specialist",
            title: "WISEHouse International Education",
            time: "2021.9 - 2022.6",
            descriptions: [
              "Created a user-friendly PC application using Python and the PyQt framework to connect with the HRCA device for real-time monitoring and analysis of swallowing signals.",
              "Assisted in designing a 6-month curriculum, communicated with students and families, presented performance evaluations, delivered academic instructions, and introduced Canadian culture.",
            ],
          },
        ].map((item, index) => {
          return (
            <ExperienceCard
              key={index}
              img={item.img}
              role={item.role}
              title={item.title}
              time={item.time}
              descriptions={item.descriptions}
            />
          );
        })}
      </div>
    </div>
  );
}
