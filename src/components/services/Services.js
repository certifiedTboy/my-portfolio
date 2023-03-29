import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Services = () => {
  return (
    <div className="service" id="service">
      <div className="container">
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <div
            className="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>What I do</p>
            <h4>I am always at your service to render quality products</h4>
          </div>
        </AnimationOnScroll>
        <div className="row">
          <AnimationOnScroll className="col-lg-6" animateIn="animate__fadeInUp">
            <div className="service-item">
              <div className="service-icon ico">
                <i className="fa fa-laptop-code ico"></i>
              </div>
              <div className="service-text">
                <h3>Web / Software Development</h3>
                <p>
                  I'm an experienced developer, proficient with the latest
                  technologies in creating quality, fast and scalable web and
                  software applications that suits your business and life
                  demands
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll className="col-lg-6" animateIn="animate__fadeInUp">
            <div className="service-item">
              <div className="service-icon ico">
                <i className="fab fa-android ico"></i>
              </div>
              <div className="service-text">
                <h3>Graphics Design</h3>
                <p>
                  I am an expert graphics designer. proficient with corel draw,
                  photoshop and illustrator and other relevant graphics
                  programmes in creating quality and eye-catching graphics
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll className="col-lg-6" animateIn="animate__fadeInUp">
            <div className="service-item">
              <div className="service-icon ico">
                <i className="fab fa-android ico"></i>
              </div>
              <div className="service-text">
                <h3>Private Instructor</h3>
                <p>
                  I find enthusiam in teaching people who share equal interest
                  in technology and desire to dive into web development and
                  wishes to scale up their skills
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll className="col-lg-6" animateIn="animate__fadeInUp">
            <div className="service-item">
              <div className="service-icon ico">
                <i className="fab fa-apple ico"></i>
              </div>
              <div className="service-text">
                <h3>Digital Marketing</h3>
                <p>
                  I am an expert digital marketer with several years of
                  experience using facebook marketing and google Ads. I share a
                  strong desire to help start ups promote their business online,
                  with the aim of driving maximum sales and attaining optimum
                  result in whatever goal they desire to achieve with their
                  business
                </p>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Services;
