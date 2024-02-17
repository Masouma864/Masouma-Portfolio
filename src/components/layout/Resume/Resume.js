import PageHeaderContent from "../../partials/pageHeaderContent";
import "./Resume.css";
import React from "react";
import { Animate } from "react-simple-animate";
import resumeData from "./utils"; // Importing the resumeData array

const Resume = () => {
  // Find the index of the professionalExperience section in the resumeData array
  const professionalExperienceIndex = resumeData.findIndex(
    (sectionData) => sectionData.section === "professionalExperience"
  );

  // Access the professionalExperience section directly
  const professionalExperience =
    resumeData[professionalExperienceIndex]?.professionalExperience || [];

  return (
    <section id="resume" className="resume section-show">
      <Animate
                  play
                  duration={1}
                  delay={0.1}
                  start={{
                    transform: "translateY(50px)",
                  }}
                  end={{
                    transform: "translateY(0px)",
                  }}
                >
      <div className="container">
        <PageHeaderContent headerTitle="Resume" headerText="Check My Resume" />
        <div className="row">
          {/* Column for Summary and Education */}
          <div className="col-lg-6">
            {resumeData.map((sectionData, index) => (
              <div
                key={index}
                className={`resume-section ${sectionData.section}`}
              >
                {sectionData.section === "summary" && (
                  <div className="resume-item pb-0">
                    <h3 className="resume-title">Summery</h3>
                    <h4>{sectionData.name}</h4>
                    <p>
                      <em>{sectionData.title}</em>
                    </p>
                    <ul>
                      <li>{sectionData.address}</li>
                      <li>{sectionData.phone}</li>
                      <li>{sectionData.email}</li>
                    </ul>
                  </div>
                )}

                {sectionData.section === "education" && (
                  <div className="resume-item">
                    <h3 className="resume-title">Education</h3>
                    {sectionData.education.map((educationItem, index) => (
                      <div key={index}>
                        <h4>{educationItem.title}</h4>
                        <h5>{educationItem.date}</h5>
                        <p>
                          <em>{educationItem.location}</em>
                        </p>
                        <p>{educationItem.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Column for Experience */}
          <div className="col-lg-6">
            <div className="resume-section professionalExperience">
              <div className="resume-item">
                <h3 className="resume-title">Professional Experience</h3>
                {professionalExperience.map((expItem, index) => (
                  <div key={index}>
                    <h4>{expItem.title}</h4>
                    <h5>{expItem.date}</h5>
                    <p>
                      <em>{expItem.company}</em>
                    </p>
                    <ul>
                      {expItem.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </Animate>
    </section>
  );
};

export default Resume;
