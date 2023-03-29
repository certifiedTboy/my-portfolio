import React from "react";

const ExamSolutionModal = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
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
              Exams Solution
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
              Exams Solution is a simple web application developed to help
              students gain access and share useful information which aids
              overall academic performance in various institution of learning
            </p>
            <p>
              The Website takes user registeration with several basic
              information like username, password, full name, phone number etc.{" "}
            </p>
            <p>
              It allows sharing of various file formats (pdf, docx, ppt, xlsx,
              mp3, mp4 etc)
            </p>
            <p>
              The website is built putting into strong consideration the
              necessity to protect user information from unsuspecting users who
              might use them for selfish and other criminal activities, hence, a
              functionality is implemented at the userprofile section where
              users can decide if their profile information is to made viewed by
              others or not
            </p>
            <p>
              The website also have a blog & event section where daily news and
              information are shared in various institutions
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
              href="http://examssolution.herokuapp.com/"
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

export default ExamSolutionModal;
