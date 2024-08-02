import React from "react";
import EducationCard from "./EducationCard";
import "./style.css";

export default function Education() {
  return (
    <div id="education" className="education-container">
      <h2 className="education-heading">
        My Education Backgrounds
      </h2>

      <div className="education-cards">
        {[
          // Modify or add education cards here
          // To add a new card, copy the entire object enclosed by {}, modify the string content; separate each object with a comma.
          {
            img: "uoft.jpg",
            title: "University of Toronto",
            subtitle: "Faculty of Applied Science and Engineering, Computer Engineering",
            time: "2022.9 - Present",
            descriptions: [
              "I am currently a third-year student at the University of Toronto, Estimate to graduate in 2026.6. Current CGPA: 3.86/4.00.",
              "Awards: University of Toronto Excellence Award, Faculty Of Applied Science And Engineering Admission Scholarship, Dean's List in all semesters.",
            ],
          },
          {
            img: "sjr.png",
            title: "St. John's-Ravenscourt School",
            subtitle: "High School",
            time: "2017.9 - 2021.6",
            descriptions: [
              "I graduated from St. John's-Ravenscourt School in 2021, with an overall average of 97%. I was the manager of the varsity basketball team and boarding prefect.",
              "Awards: Various Waterloo Math Contest Awards, 2019 COMC Manitoba Honor Role.",
            ],
          }
        ].map((item, index) => {
          return (
            <EducationCard
              key={index}
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              time={item.time}
              descriptions={item.descriptions}
            />
          );
        })}
      </div>
    </div>
  );
}
