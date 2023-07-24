import React, { useEffect, useRef, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Side from "../../Assets/side.png";

const Progress = () => {
  const [htmlProgress, setHtmlProgress] = useState(0);
  const [cssProgress, setCssProgress] = useState(0);
  const [JavaScriptProgress, setJavascriptProgress] = useState(0);
  const [TypescriptProgress, setTypescriptProgress] = useState(0);
  const [reactProgress, setReactProgress] = useState(0);
  const [nodeProgress, setNodeProgress] = useState(0);
  const [mongoProgress, setMongoProgress] = useState(0);
  const [mysqlProgress, setMysqlProgress] = useState(0);
  const [postgressProgress, setPostgressProgress] = useState(0);
  const htmlRef = useRef();
  const cssRef = useRef();
  const javascriptRef = useRef();
  const typescriptRef = useRef();
  const reactRef = useRef();
  const nodeRef = useRef();
  const mysqlRef = useRef();
  const postgressRef = useRef();
  const mongoRef = useRef();
  useEffect(() => {
    const htmlValue = htmlRef.current.innerText;
    const cssValue = cssRef.current.innerText;
    const javascriptValue = javascriptRef.current.innerText;
    const typescriptValue = typescriptRef.current.innerText;
    const nodeValue = nodeRef.current.innerText;
    const mongoValue = mongoRef.current.innerText;
    const mysqlValue = mysqlRef.current.innerText;
    const postgressValue = postgressRef.current.innerText;

    setHtmlProgress(htmlValue);
    setCssProgress(cssValue);
    setJavascriptProgress(javascriptValue);
    setTypescriptProgress(typescriptValue);
    setReactProgress(reactRef.current.innerText);
    setNodeProgress(nodeValue);
    setMongoProgress(mongoValue);
    setMysqlProgress(mysqlValue);
    setPostgressProgress(postgressValue);
  }, [htmlRef]);

  return (
    <AnimationOnScroll animateIn="animate__fadeInUp">
      <div
        className="about wow fadeInUp"
        data-wow-delay="0.1s"
        id="about"
        style={{ marginTop: "20px" }}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src={Side} alt="Imagesss" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-header text-left">
                  <p>Learn About Me</p>
                </div>
                <div>
                  <p>
                    A certified and professional Node Js Web Developer and a
                    creative graphics designer and digital marketer
                  </p>
                </div>
                <div className="skills">
                  <div className="skill-name">
                    <p>HTML 5</p>
                    <p ref={htmlRef} defaultValue={100}>
                      100%
                    </p>
                  </div>
                  <div className="progress">
                    <AnimationOnScroll
                      style={{ width: `${htmlProgress}` }}
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      animateIn="animate__fadeInLeft"></AnimationOnScroll>
                  </div>
                  <div className="skill-name">
                    <p>CSS 3 / Bootstrap 5</p>
                    <p ref={cssRef} defaultValue={90}>
                      90%
                    </p>
                  </div>
                  <div className="progress">
                    <AnimationOnScroll
                      style={{ width: `${cssProgress}` }}
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      animateIn="animate__fadeInLeft"></AnimationOnScroll>
                  </div>
                  <div className="skill-name">
                    <p>JavaScript</p>
                    <p ref={javascriptRef} defaultValue={80}>
                      80%
                    </p>
                  </div>
                  <div className="progress">
                    <AnimationOnScroll
                      animateIn="animate__fadeInLeft"
                      style={{ width: `${JavaScriptProgress}` }}
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"></AnimationOnScroll>
                  </div>

                  <div className="skill-name">
                    <p>Typescript</p>
                    <p ref={typescriptRef}>70%</p>
                  </div>
                  <div className="progress">
                    <AnimationOnScroll
                      animateIn="animate__fadeInLeft"
                      style={{ width: `${TypescriptProgress}` }}
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"></AnimationOnScroll>
                  </div>

                  <div className="skill-name">
                    <p>React Js</p>
                    <p ref={reactRef}>80%</p>
                  </div>
                  <div className="progress">
                    <AnimationOnScroll
                      animateIn="animate__fadeInLeft"
                      style={{ width: `${reactProgress}` }}
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"></AnimationOnScroll>
                  </div>
                  <div className="skill-name">
                    <p>Node Js</p>
                    <p ref={nodeRef}>90%</p>
                  </div>
                  <div className="progress">
                    <AnimationOnScroll
                      animateIn="animate__fadeInLeft"
                      style={{ width: `${nodeProgress}` }}
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"></AnimationOnScroll>
                  </div>
                  <div className="skill-name">
                    <p>Mongo Db</p>
                    <p ref={mongoRef}>90%</p>
                  </div>
                  <div className="progress">
                    <AnimationOnScroll
                      animateIn="animate__fadeInLeft"
                      style={{ width: `${mongoProgress}` }}
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"></AnimationOnScroll>
                  </div>
                  <div className="skill-name">
                    <p>MySql</p>
                    <p ref={mysqlRef}>80%</p>
                  </div>
                  <div className="progress">
                    <AnimationOnScroll
                      animateIn="animate__fadeInLeft"
                      style={{ width: `${mysqlProgress}` }}
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"></AnimationOnScroll>
                  </div>

                  <div className="skill-name">
                    <p>PostGresQl</p>
                    <p ref={postgressRef}>70%</p>
                  </div>
                  <div className="progress">
                    <AnimationOnScroll
                      animateIn="animate__fadeInLeft"
                      style={{ width: `${postgressProgress}` }}
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"></AnimationOnScroll>
                  </div>
                </div>

                <a
                  href="https://drive.google.com/uc?id=1D2W1ocCRbhqtAISEPXPs5jCV_rSg31vJ&export=download"
                  className={"btn"}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Progress;
