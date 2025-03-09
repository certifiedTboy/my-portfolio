const TeeFlixModal = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop7"
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
              I created teeflix for introverted tech enthusiast and movie lovers
              like me who have difficulty visiting the cinema and who can't
              afford netflix subscription yet
            </p>
            <p>
              The application which uses TMDB api for movie data is built with
              REACT JS and uses technologies such as Redux and Redux RTK for API
              consumption
            </p>
            <p>
              It relies heavily on a third party API and Iframe provided by
              vidsrc for the streaming functionality.
            </p>

            <p>
              Tee-flix is also available on mobile as an android application.
            </p>

            <p>Enjoy teeflix with me...</p>
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
              href="https://tee-flix.vercel.app"
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

export default TeeFlixModal;
