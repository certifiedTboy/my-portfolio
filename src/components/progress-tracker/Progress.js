import React from "react";

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Socket.io",
  "HTML & CSS",
];

const Progress = () => (
  <section className="about-section section-padding" id="about">
    <div className="page-shell about-layout">
      <div className="section-intro" data-scroll-reveal="left">
        <p className="eyebrow">A little about me</p>
        <h2>Good work starts with <span>good thinking.</span></h2>
      </div>
      <div className="about-copy" data-scroll-reveal="right">
        <p className="about-lead">
          I&apos;m a software engineer who enjoys taking complex ideas and
          turning them into useful, human-friendly products.
        </p>
        <p className="body-copy">
          From polished front ends to the systems that power them, I bring
          curiosity, care, and a practical mindset to every build. I also love
          sharing what I know and helping others find their footing in tech.
        </p>
        <div className="technology-list" aria-label="Technologies I work with">
          {technologies.map((technology) => (
            <span className="technology-chip" key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Progress;
