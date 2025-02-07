const DuroTradeModal = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop6"
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
              Durotrade Logistics
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
              Durotrade logistics is a shipping company based in Lagos Nigeria
            </p>
            <p>
              The application helps showcase their services to their current and
              prospective customers
            </p>
            <p>
              It has an embedded feedback form customers can use to make
              enquiries and which the company also use as a feedback mechanism
              from their customers
            </p>

            <p>
              The web application is built with React Js with properly
              implemented search engine optimization that suits today's business
              needs
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
              href="https://durotrade-logistics-git-main-certifiedtboy.vercel.app/"
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

export default DuroTradeModal;
