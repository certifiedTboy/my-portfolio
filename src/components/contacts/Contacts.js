import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contacts = () => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      className="contact wow fadeInUp"
      data-wow-delay="0.1s"
      id="contact"
    >
      <div className="container-fluid">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <div className="contact-form">
                <div id="success"></div>
                <form action="/message" method="POST">
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required="required"
                      name="email"
                    />
                    <p className="help-block"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Full Name"
                      required="required"
                      name="fullName"
                    />
                    <p className="help-block"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="organization"
                      required="required"
                      name="organization"
                    />
                    <p className="help-block"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="number"
                      className="form-control"
                      id="email"
                      placeholder="Phone Number"
                      required="required"
                      name="phoneNumber"
                    />
                    <p className="help-block"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id="email"
                      placeholder="Subject"
                      required="required"
                    />
                    <p className="help-block"></p>
                  </div>

                  <div className="control-group">
                    <textarea
                      name="message"
                      className="form-control"
                      id="email"
                      cols="30"
                      rows="10"
                      placeholder="Enter Message"
                    ></textarea>

                    <p className="help-block"></p>
                  </div>
                  <div>
                    <button className="btn" type="submit" disabled>
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Contacts;
