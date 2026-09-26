import React from "react";

const services = [
  {
    number: "01",
    title: "Web & software development",
    description:
      "Responsive, reliable web applications built around real user needs and business goals.",
    mark: "</>",
  },
  {
    number: "02",
    title: "Backend engineering",
    description:
      "Thoughtful APIs, integrations, and server-side systems that keep products running smoothly.",
    mark: "{ }",
  },
  {
    number: "03",
    title: "Teaching & mentorship",
    description:
      "Hands-on guidance for people learning web development and growing their technical skills.",
    mark: "↗",
  },
];

const Services = () => (
  <section className="services-section section-padding" id="services">
    <div className="page-shell">
      <div className="section-heading" data-scroll-reveal>
        <div>
          <p className="eyebrow">How I can help</p>
          <h2>Thoughtful work, <span>built to last.</span></h2>
        </div>
        <p className="heading-aside">
          A few ways I can help take your next idea from first sketch to finished product.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article
            className="service-card"
            data-scroll-reveal
            key={service.number}
            style={{ "--reveal-delay": `${Number(service.number) * 90}ms` }}
          >
            <div className="service-card-top">
              <span className="service-number">{service.number}</span>
              <span className="service-mark" aria-hidden="true">{service.mark}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a className="service-link" href="#contact" aria-label={`Talk about ${service.title}`}>
              Discuss a project <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
