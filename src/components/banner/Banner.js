import React from "react";

const Banner = () => {
  const cvLink = process.env.REACT_APP_CV_LINK;

  return (
    <section className="cv-banner">
      <div className="page-shell cv-banner-inner" data-scroll-reveal>
        <div>
          <p className="eyebrow">A little more about my work</p>
          <h2>Want the full story?</h2>
          <p>Take a look at my CV and let&apos;s find the right way to work together.</p>
        </div>
        {cvLink ? (
          <a className="button button-light" href={cvLink} target="_blank" rel="noreferrer">
            Download my CV <span aria-hidden="true">↓</span>
          </a>
        ) : (
          <a className="button button-light" href="#contact">
            Ask me for my CV <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </section>
  );
};

export default Banner;
