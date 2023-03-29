import React from "react";

const ChatConnectModal = () => {
  const modalData = [
    {
      title: "Chat Connect",
      Description: ` <p>
  Chat connect is a simple web application built for instant
  messaging
</p>
<p>
  It is built with Node Js and the messaging is powered by socket.io
</p>
<p>
  Chat connect supports both group chats and private chatting among
  two different users.
</p>
<p>
  Group chatting are done in already created rooms and each rooms
  has a unique topic from sex, to politics, fashion etc
</p>
<p>
  Private messaging can be carried out on the condition that both
  users are friends. Therefore, the website adopts a functionality
  that allow users to send friend request to each other, and they
  become friends on the condition that the other party accepts the
  request
</p>
<p>
  The Website allows user registeration, a userprofile section that
  shows users information and each user have the option to decide
  who can and who can not view their profile details
</p>`,
    },
    {
      Title: "Estate Agency",
      Description: `<p>Estate Agency is a web application built for an estate agency firm.</p>
    <p>It is built with HTML, CSS and Javascript</p>
    <p>The website permits user registeration with a userprofile section that shows each registered user details and all other activities on the website</p>
    <p>The website has an admin panel, where all activities on the website are being monitored, from checking user activities, to posting new apartments, deleting old apartments to replying to messages and enquiries from other users</p>
    <p>The messaging section of the website is powered by socket.io. A javascript library which allows instant messaging</p>`,
    },
  ];

  return (
    <div
      className="modal fade"
      id="staticBackdrop2"
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
              Chat Connect
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
              Chat connect is a simple web application built for instant
              messaging
            </p>
            <p>
              It is built with Node Js and the messaging functionality is
              powered by socket.io
            </p>
            <p>
              Chat connect supports both group and private chats among two
              different users.
            </p>
            <p>
              Group chats are done in pre-created rooms and each rooms has a
              unique topic from comedy, to politics, fashion etc
            </p>
            <p>
              Private chats can be carried out on the condition that both users
              are friends. Therefore, the application adopts a functionality
              that allow users send friend request to each other, and they
              become friends on the condition that the other party accepts the
              request
            </p>
            <p>
              The application supports user registeration (Authentication /
              Authorization), a userprofile section that shows users information
              and each user have the option to decide who can and who can not
              view their profile details
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
              href="https://chatconnect.vercel.app/login"
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

export default ChatConnectModal;
