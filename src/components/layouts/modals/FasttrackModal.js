import React from "react";

const FasttrackModal = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop3"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Webdev Blog
            </h5>
            <button
              style={{ background: "none", border: "none" }}
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close">
              <i style={{ color: "red" }} className="far fa-times-circle"></i>
            </button>
          </div>
          <div class="modal-body">
            <p>Webdev blog is a web-based tech blog</p>
            <p>
              It is being built to help tech newbies and experts gain access to
              valid information relating to their tech careers.
            </p>
            <p>
              It covers issues on changes in the tech world and contents takes a
              how to do approach than a beginner introduction
            </p>

            <p>
              This project is built with Node JS Express (Typescript) on the
              backend and React JS on the FrontEnd. While MongoDb is used for
              the database
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal">
              Close
            </button>
            <a
              href="https://webdev-blog-rust.vercel.app"
              className="btn btn-primary"
              type="button"
              target="_blank"
              rel="noreferrer">
              View Life Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FasttrackModal;
