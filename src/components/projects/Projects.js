import React, { Fragment, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ChatConnectModal from "../layouts/modals/chatConnectModal";
import Chat from "../../Assets/chat.png";
import Estate from "../../Assets/estate.png";
import Exam from "../../Assets/exam.png";
import Fast from "../../Assets/fast.png";
import Durotrade from "../../Assets/durotrade.png";
import Chat_Ai from "../../Assets/chat-ai.png";
import teeflix from "../../Assets/teeflix.png";
import ExamSolutionModal from "../layouts/modals/ExamSolutionModal";
import EstateAgencyModal from "../layouts/modals/EstateAgencyModal";
import FasttrackModal from "../layouts/modals/FasttrackModal";
import InfoModal from "../layouts/modals/InfoModal";
import ChatAiModal from "../layouts/modals/ChatAiModal";
import DuroTradeModal from "../layouts/modals/DuroTradeModal";
import TeeFlixModal from "../layouts/modals/TeeFlixModal";

const Projects = () => {
  return (
    <Fragment>
      <ChatConnectModal />
      <ExamSolutionModal />
      <EstateAgencyModal />
      <FasttrackModal />
      <InfoModal />
      <ChatAiModal />
      <DuroTradeModal />
      <TeeFlixModal />
      <div className="portfolio" id="portfolio">
        <div className="container">
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            className="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>My Portfolio</p>
            <h2>Recent Projects</h2>
          </AnimationOnScroll>
          <div className="row">
            <div className="col-12">
              <ul id="portfolio-filter">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-1">Web Applications</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className="portfolio-wrap">
                  <div className="portfolio-img">
                    <img src={Chat} alt="Image" />
                  </div>
                  <div className="portfolio-text">
                    <h3>
                      <a
                        href=""
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop2"
                      >
                        Chat Connect
                      </a>{" "}
                    </h3>
                    <a className="btn">+</a>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp"
              data-wow-delay="0.0s"
              style={{ marginBottom: "40px" }}
            >
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className="portfolio-wrap">
                  <div className="portfolio-img">
                    <img src={Estate} alt="Image" />
                  </div>
                  <div className="portfolio-text">
                    <h3>
                      <a
                        href=""
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop1"
                      >
                        Estate-Agency
                      </a>
                    </h3>
                    <a className="btn">+</a>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className="portfolio-wrap">
                  <div className="portfolio-img">
                    <img src={Exam} alt="Image" />
                  </div>
                  <div className="portfolio-text">
                    <h3>
                      <a
                        href=""
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        Exams Solution
                      </a>{" "}
                    </h3>
                    <a className="btn">+</a>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className="portfolio-wrap">
                  <div className="portfolio-img">
                    <img src={Fast} alt="Image" />
                  </div>
                  <div className="portfolio-text">
                    <h3>
                      <a
                        href=""
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop3"
                      >
                        WebDev Blog
                      </a>
                    </h3>
                    <a className="btn">+</a>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className="portfolio-wrap">
                  <div className="portfolio-img">
                    <img src={Chat_Ai} alt="Image" />
                  </div>
                  <div className="portfolio-text">
                    <h3>
                      <a
                        href=""
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop5"
                      >
                        Chat AI
                      </a>
                    </h3>
                    <a className="btn">+</a>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className="portfolio-wrap">
                  <div className="portfolio-img">
                    <img src={Durotrade} alt="Image" />
                  </div>
                  <div className="portfolio-text">
                    <h3>
                      <a
                        href=""
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop6"
                      >
                        Durotrade Logistics
                      </a>
                    </h3>
                    <a className="btn">+</a>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className="portfolio-wrap">
                  <div className="portfolio-img">
                    <img src={teeflix} alt="Image" />
                  </div>
                  <div className="portfolio-text">
                    <h3>
                      <a
                        href=""
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop7"
                      >
                        Tee Flix Streaming
                      </a>
                    </h3>
                    <a className="btn">+</a>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
