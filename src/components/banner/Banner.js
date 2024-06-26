import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Banner = () => {
  return (
    <AnimationOnScroll
      animateIn="animate__pulse"
      className="banner wow zoomIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="section-header text-center">
          <h2>
            Download <span>My</span> C.V
          </h2>
        </div>
        <div className="container banner-text">
          <p>
            Download C.V with the download button below to learn more about me
            and my previous works
          </p>

          <a href={process.env.REACT_APP_CV_LINK} className={"btn"}>
            Download CV
          </a>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Banner;
