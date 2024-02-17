import PageHeaderContent from "../../partials/pageHeaderContent";
import "./About.scss";
import React from "react";
import CountBox from "./CountBox";
import {skillsData} from './utils'
import InterestsSection from "./InterestSection";
import Testimonials from "./Testimonials";
import { Line } from "rc-progress";
import { Animate, AnimateKeyframes } from "react-simple-animate";

const personalDetails = [
  {
    label: "Name",
    value: "Masouma",
  },
  {
    label: "Phone",
    value: "+93767624937",
  },
  {
    label: "City",
    value: "Kabul, Afghanistan",
  },
 
  {
    label: "Degree",
    value: "Bachelor",
  },
  {
    label: "Phone",
    value: "+93767624937",
  },
  {
    label: "City",
    value: "Kabul, Afghanistan",
  },
  
  {
    label: "Degree",
    value: "Bachelor",
  },
  {
    label: "Github",
    value: "github.com/Masouma864",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/masouma-modarresi",
  },
  {
    label: "Email",
    value: "masouma2020@gmail.com",
  },
  
  {
    label: "Freelance",
    value: "Available",
  },
];
const shortDesc =
  "Passionate software developer with a proven track record of delivering innovative solutions.";
const bigDesc = ` With over 3 years of experience in the industry, I have a proven track record of designing and developing innovative software solutions that meet and exceed client expectations. My journey in software development began with a deep-seated curiosity and love for technology, which has only grown stronger over the years. I thrive on the challenge of solving complex problems and transforming ideas into reality through clean, efficient code..`;

function About() {
  const interests = [
    {
      iconClassName: "ri-code-line", // Icon for web development
      iconColor: "#29cc61", // Green color for web development
      title: "Web Development",
    },
    {
      iconClassName: "ri-layout-grid-line", // Icon for UI/UX design
      iconColor: "#ff5733", // Orange color for UI/UX design
      title: "UI/UX Design",
    },
    {
      iconClassName: "ri-book-3-line", // Icon for continuous learning
      iconColor: "#007bff", // Blue color for continuous learning
      title: "Continuous Learning",
    },
    {
      iconClassName: "ri-tools-line", // Icon for problem-solving
      iconColor: "#ffc107", // Yellow color for problem-solving
      title: "Problem Solving",
    },
    {
      iconClassName: "ri-group-line", // Icon for collaboration and teamwork
      iconColor: "#6610f2", // Purple color for collaboration and teamwork
      title: "Collaboration and Teamwork",
    },
    {
      iconClassName: "ri-hand-heart-line", // Icon for tech community involvement
      iconColor: "#dc3545", // Red color for tech community involvement
      title: "Tech Community Involvement",
    },
    {
      iconClassName: "ri-accessibility-line", // Icon for accessibility
      iconColor: "#20c997", // Teal color for accessibility
      title: "Passion for Accessibility",
    },
    {
      iconClassName: "ri-user-line", // Icon for user-centric approach
      iconColor: "#6610f2", // Purple color for user-centric approach
      title: "User-Centric Approach",
    },
  ];
  
  const awards = {
    iconClassName: "bi bi-award",
    start: 0,
    end: 10,
    duration: 2,
    label: "Awards",
  };

  const projects = {
    iconClassName: "bi bi-journal-richtext",
    start: 0,
    end: 50,
    duration: 1,
    label: "Projects",
  };
  const happyClients = {
    iconClassName: "bi bi-emoji-smile",
    start: 0,
    end: 10,
    duration: 2,
    label: "Happy Clients",
  };

  const hoursOfSupport = {
    iconClassName: "bi bi-headset",
    start: 0,
    end: 100,
    duration: 1,
    label: "Hours Of Support",
  };

  return (
    <>
      <section id="about" className="about">
      <Animate
                  play
                  duration={1}
                  delay={0.3}
                  start={{
                    transform: "translateY(-200px)",
                  }}
                  end={{
                    transform: "translateY(0px)",
                  }}
                >
        <div className="about-me container">
          <PageHeaderContent
            headerTitle="About"
            headerText="Learn more about me"
          />

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="./img/me.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Software Developer</h3>
              <p className="fst-italic">{shortDesc}</p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    {personalDetails
                      .slice(0, Math.ceil(personalDetails.length / 2))
                      .map((item) => (
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>{item.label}:</strong>{" "}
                          <span>{item.value}</span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    {personalDetails
                      .slice(Math.ceil(personalDetails.length / 2))
                      .map((item) => (
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>{item.label}:</strong>{" "}
                          <span>{item.value}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <p>{bigDesc}</p>
            </div>
          </div>
        </div>

        <div className="counts container">
          <div className="row">
            <CountBox {...happyClients} />
            <CountBox {...hoursOfSupport} />
            <CountBox {...projects} />
            <CountBox {...awards} />
          </div>
        </div>
        <div className="skills container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="skills__content-wrapper">
            {skillsData.map((item, i) => (
              <div key={i} className="skills__content-wrapper__inner-content">
                <Animate
                  play
                  duration={1}
                  delay={0.3}
                  start={{
                    transform: "translateX(-200px)",
                  }}
                  end={{
                    transform: "translateX(0px)",
                  }}
                >
                  <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
                  <div className="skills__content-wrapper__inner-content__progressbar-container">
                    {item.data.map((skillItem, j) => (
                      <AnimateKeyframes
                        play
                        duration={1}
                        keyframes={["opacity:1", "opacity:0"]}
                        iterationCount="1"
                      >
                        <div className="progressbar-wrapper" key={j}>
                          <p>{skillItem.skillName}</p>
                          <Line
                            percent={skillItem.percentage}
                            strokeWidth="2"
                            strokeColor="#18d26e"
                            trailWidth="2"
                            strokeLinecap="square"
                          />
                        </div>
                      </AnimateKeyframes>
                    ))}
                  </div>
                </Animate>
              </div>
            ))}
          </div>
        </div>

        <InterestsSection interests={interests} />

        <div className="testimonials container">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>

          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="swiper-wrapper">
              <Testimonials />
            </div>
            <div className="swiper-pagination"></div>
          </div>

          <div className="owl-carousel testimonials-carousel"></div>
        </div>
      </Animate>
      </section>
    </>
  );
}
export default About;
