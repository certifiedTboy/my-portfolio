import React from "react";

const EstateAgencyModal = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Estate Agency
            </h5>
            <button
              style={{ background: "none", border: "none" }}
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i style={{ color: "red" }} className="far fa-times-circle"></i>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Estate Agency is a web application built for an estate agency
              firm.
            </p>
            <p>It is built with HTML, CSS and Javascript</p>
            <p>
              The website permits user registeration with a userprofile section
              that shows each registered user details and all other activities
              on the website
            </p>
            <p>
              The website has an admin panel, where all activities on the
              website are being monitored, from checking user activities, to
              posting new apartments, deleting old apartments to replying to
              messages and enquiries from other users
            </p>
            <p>
              The messaging section of the website is powered by socket.io. A
              javascript library which allows instant messaging
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <a
              href="https://estate-agency2.herokuapp.com"
              className="btn btn-primary"
              type="button"
              target="_blank"
              rel="noreferrer"
            >
              View Life Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateAgencyModal;
