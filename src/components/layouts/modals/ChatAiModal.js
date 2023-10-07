import React from "react";

const ChatAiModal = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop5"
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
              Chat Ai
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
              Chat AI is a chat application where you can ask questions and get
              instant and accurate answers
            </p>
            <p>
              It is built with Node Js and the messaging functionality is
              powered by socket.io. The Ui is built with React Js Library
            </p>
            <p>The Ai functionality is powered by Open Ai gpt-3 API</p>
            <p>
              User Authentication is powered by google OAuth2 Authentication API
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
              href="https://chat-ai-client-alpha.vercel.app/get-started/sign-in"
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

export default ChatAiModal;
