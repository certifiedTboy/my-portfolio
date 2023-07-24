import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const WorkExperience = () => {
  return (
    <div className="experience" id="experience">
      <div className="container">
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <header
            className="section-header text-center wow zoomIn"
            data-wow-delay="0.1s">
            <p>My Resume</p>
            <h2>Work Experience</h2>
          </header>
        </AnimationOnScroll>

        <div className="timeline">
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <div
              className="timeline-item left wow slideInLeft"
              data-wow-delay="0.1s">
              <div className="timeline-text">
                <div className="timeline-date">2020</div>
                <h2>Web Developer</h2>
                <h4>UR-Fasttrack Admissions</h4>
                <p>
                  Developed and managed their website, which is aimed at
                  allowing prospective students register for their JUPEB
                  programmes online
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <div
              className="timeline-item right wow slideInRight"
              data-wow-delay="0.1s">
              <div className="timeline-text">
                <div className="timeline-date">2021 - 2022</div>
                <h2>Software Engineer (Node Js Backend)</h2>
                <h4>The House of Sounds Entertainment</h4>
                <p>
                  Worked on different functionalities of their application built
                  on micro-services architecture with typescript nodejs,
                  postgresql and mongodb databases
                </p>
              </div>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <div
              className="timeline-item left wow slideInRight"
              data-wow-delay="0.1s">
              <div className="timeline-text">
                <div className="timeline-date">2023</div>
                <h2>Tech Instructor (Fullstack JS / Web Development)</h2>
                <h4>GoMyCode Nigeria</h4>
                <p>
                  Provide support for students on their course of study and
                  guide through their learning process. Provide a code along
                  classes on real life projects to help students gain hands on
                  experiences
                </p>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
