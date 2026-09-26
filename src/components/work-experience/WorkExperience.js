import React from "react";

const roles = [
  {
    period: "2023",
    role: "Tech Instructor",
    focus: "Full-stack JavaScript · Web development",
    company: "GoMyCode Nigeria",
    details:
      "Supporting students through their learning journey and leading hands-on, real-world project sessions.",
  },
  {
    period: "2021 — 2022",
    role: "Software Engineer",
    focus: "Node.js · TypeScript · Backend",
    company: "The House of Sounds Entertainment",
    details:
      "Built application features in a microservices environment using TypeScript, Node.js, PostgreSQL, and MongoDB.",
  },
  {
    period: "2020",
    role: "Web Developer",
    focus: "Web applications",
    company: "UR-Fasttrack Admissions",
    details:
      "Developed and managed a website that lets prospective students register online for JUPEB programmes.",
  },
];

const WorkExperience = () => (
  <section className="experience-section section-padding" id="experience">
    <div className="page-shell experience-layout">
      <div className="experience-aside" data-scroll-reveal="left">
        <p className="eyebrow">The journey so far</p>
        <h2>Learning by <span>building.</span></h2>
        <p className="body-copy">
          Each role has added a new perspective—from delivering for clients to
          helping the next generation of developers get started.
        </p>
        <a className="text-link" href="#contact">Work with me <span aria-hidden="true">↗</span></a>
      </div>
      <div className="experience-list">
        {roles.map((item, index) => (
          <article
            className="experience-item"
            data-scroll-reveal="right"
            key={item.company}
            style={{ "--reveal-delay": `${(index + 1) * 80}ms` }}
          >
            <div className="experience-period">{item.period}</div>
            <div className="experience-details">
              <h3>{item.role}</h3>
              <p className="experience-focus">{item.focus}</p>
              <p className="experience-company">{item.company}</p>
              <p className="body-copy">{item.details}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WorkExperience;
