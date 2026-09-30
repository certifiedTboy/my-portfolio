import React from "react";
import HeroImage from "../../Assets/hero.png";

const Intro = () => (
  <section className="hero-section" id="home">
    <div className="hero-layout page-shell">
      <div className="hero-copy" data-scroll-reveal="left">
        <p className="eyebrow">
          <span className="availability-dot" /> Software engineer &amp; creative
          problem solver
        </p>
        <h1>
          Turning good ideas into <span>great digital</span> experiences.
        </h1>
        <p className="hero-description">
          I&apos;m Emmanuel Tosin — I design and build thoughtful web products
          that help people and businesses move forward.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-footnote">
          <span className="footnote-line" />
          <span>Based in Nigeria · Working worldwide</span>
        </div>
      </div>
      <div
        className="hero-art"
        data-scroll-reveal="right"
        aria-label="Illustration of a software developer"
        role="img"
      >
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-label">
          <span>01</span> / THE DEVELOPER
        </div>
        <div className="art-sticker sticker-code">&lt;code /&gt;</div>
        <div className="art-sticker sticker-spark" aria-hidden="true">
          ✳
        </div>
        <img className="hero-portrait" src={HeroImage} alt="" />
        <div className="art-caption">
          <span className="caption-kicker">Curious by nature</span>
          <span>Building what&apos;s next.</span>
        </div>
      </div>
    </div>
    <div className="hero-bottom page-shell" data-scroll-reveal>
      <span>Scroll to explore</span>
      <span className="scroll-arrow" aria-hidden="true">
        ↓
      </span>
      <span className="hero-bottom-note">
        A little bit of design. A whole lot of development.
      </span>
    </div>
  </section>
);

export default Intro;
