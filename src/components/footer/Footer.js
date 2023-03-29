import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Footer = () => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      className="footer wow fadeIn"
      data-wow-delay="0.3s"
    >
      <div className="container-fluid">
        <div className="container">
          <div className="footer-info">
            <h2>Adebisi Tosin</h2>

            <div className="footer-menu">
              <p>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="Tel: +2348135359082"
                  title="Message Developer on Whatsapp"
                >
                  +2348135359082
                </a>
              </p>
              <p>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="email:etosin70@gmail.com"
                >
                  etosin70@gmail.com
                </a>{" "}
              </p>
            </div>
            <div className="footer-social">
              <a href="https://twitter.com/Certified_Tboy1" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>

              <a
                href="https://web.facebook.com/infiniteIdeas12"
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://web.facebook.com/infiniteIdeas12"
                target="_blank"
              >
                <i className="fab fa-facebook-messenger"></i>
              </a>
              <a
                href="https://linkedin.com/in/emmanuel-tosin-817257149"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://wa.me/+2347018810562" target="_blank">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container copyright"></div>
      </div>
    </AnimationOnScroll>
  );
};

export default Footer;
