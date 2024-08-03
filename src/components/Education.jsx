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
            subtitle: "Computer Engineering + PEY Co-op, Faculty of Applied Science and Engineering",
            time: "2022.9 - Present",
            descriptions: [
              "I am currently a third-year student at the University of Toronto, Estimate to graduate in 2026.6. Current CGPA: 3.86/4.00.",
              "I focus on areas such as artificial intelligence, machine learning, and software development.",
              <>
                <div className="education-subtitle"> Awards: </div>
                <ul>
                  <li>
                    <b style={{ color: 'black' }}>「University of Toronto Excellence Award 」</b> (2024)
                  </li>
                  <li>
                    <b style={{ color: 'black' }}>「Dean's Honour List」</b> (All semesters at UofT)
                  </li>
                  <li>
                  <b style={{ color: 'black' }}> 「Faculty of Applied Science And Engineering Admission Scholarship」 </b> (2022)
                  </li>
                </ul>
              </>,
            ],
            
            
          },
          {
            img: "sjr.png",
            title: "St. John's-Ravenscourt School",
            subtitle: "High School, Winnipeg, Manitoba",
            time: "2017.9 - 2021.6",
            descriptions: [
              "I graduated from St. John's-Ravenscourt School in 2021, with an overall average of 97%. I was the manager of the varsity basketball team and boarding prefect.",
              <>
                  <div className="education-subtitle"> Awards: </div> Various Waterloo Math Contest Awards, 2019 COMC Manitoba Honor Role.
              </>,
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
