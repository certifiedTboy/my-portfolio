import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Banner = () => {
  return (
    <AnimationOnScroll
      animateIn="animate__pulse"
      className="banner wow zoomIn"
      data-wow-delay="0.1s">
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
          <a
            href="https://drive.google.com/uc?id=1D2W1ocCRbhqtAISEPXPs5jCV_rSg31vJ&export=download"
            className={"btn"}>
            Download CV
          </a>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Banner;
