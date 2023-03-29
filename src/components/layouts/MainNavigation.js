import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import classes from "./MainNav.module.css";
const MainNavigation = ({ scrollTop }) => {
  return (
    <div
      className={`navbar navbar-expand-lg bg-light navbar-light  ${
        scrollTop > 0 ? `nav-sticky` : ""
      }`}
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand bra">
          My Portfolio
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto">
            <Link
              activeClass="active"
              className={`nav-item nav-link ${classes.mousePoint} active`}
              to="home"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              delay={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              Home
            </Link>

            <Link
              activeClass="active"
              className={`nav-item nav-link ${classes.mousePoint}`}
              to="about"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              delay={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              About
            </Link>

            <Link
              activeClass="active"
              className={`nav-item nav-link ${classes.mousePoint}`}
              to="service"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              delay={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              Service
            </Link>

            <Link
              activeClass="active"
              className={`nav-item nav-link ${classes.mousePoint}`}
              to="experience"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              delay={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              Experience & Trainings
            </Link>

            <Link
              activeClass="active"
              className={`nav-item nav-link ${classes.mousePoint}`}
              to="portfolio"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              delay={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              Portfolio
            </Link>

            <Link
              activeClass="active"
              className={`nav-item nav-link ${classes.mousePoint}`}
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              delay={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
