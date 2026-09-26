import React from "react";
import Durotrade from "../../Assets/durotrade.png";
import Teeflix from "../../Assets/teeflix.png";
import ChatAi from "../../Assets/chat-ai.png";
import Fasttrack from "../../Assets/fast.png";
import Estate from "../../Assets/estate.png";
import Chat from "../../Assets/chat.png";
import Exam from "../../Assets/exam.png";

const projects = [
  {
    name: "Durotrade Logistics",
    type: "Business website",
    description: "A service-focused site with customer enquiries for a Lagos-based shipping company.",
    image: Durotrade,
    alt: "Durotrade Logistics website preview",
    url: "https://durotrade-logistics-git-main-certifiedtboy.vercel.app/",
    tags: ["React", "SEO"],
  },
  {
    name: "Tee Flix",
    type: "Streaming experience",
    description: "A movie discovery and streaming experience powered by TMDB data.",
    image: Teeflix,
    alt: "Tee Flix movie application preview",
    url: "https://tech-flix-beryl.vercel.app",
    tags: ["React", "Redux", "TMDB API"],
  },
  {
    name: "Chat AI",
    type: "Real-time application",
    description: "An AI chat app combining real-time messaging, Google sign-in, and content filtering.",
    image: ChatAi,
    alt: "Chat AI application preview",
    url: "https://chat-ai-client-alpha.vercel.app/get-started/sign-in",
    tags: ["React", "Node.js", "Socket.io"],
  },
  {
    name: "WebDev Blog",
    type: "Editorial platform",
    description: "A practical tech blog sharing useful, how-to-focused articles for developers.",
    image: Fasttrack,
    alt: "WebDev Blog website preview",
    url: "https://webdev-blogg.vercel.app",
    tags: ["React", "TypeScript", "MongoDB"],
  },
  {
    name: "Estate Agency",
    type: "Property platform",
    description: "A property site with user profiles, messaging, and an admin management panel.",
    image: Estate,
    alt: "Estate Agency website preview",
    url: "https://estate-agency-tjjc.onrender.com",
    tags: ["JavaScript", "Socket.io"],
  },
  {
    name: "Chat Connect",
    type: "Messaging application",
    description: "A real-time messaging app for private conversations and topic-based group chats.",
    image: Chat,
    alt: "Chat Connect application preview",
    url: "https://chatconnect.vercel.app/login",
    tags: ["Node.js", "Socket.io"],
  },
  {
    name: "Exams Solution",
    type: "Learning community",
    description: "A student community for sharing learning resources, news, and campus events.",
    image: Exam,
    alt: "Exams Solution website preview",
    url: "https://exams-solution.onrender.com/",
    tags: ["Web app", "Community"],
  },
];

const Projects = () => (
  <section className="projects-section section-padding" id="projects">
    <div className="page-shell">
      <div className="section-heading projects-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Ideas, meet <span>execution.</span></h2>
        </div>
        <p className="heading-aside">
          A selection of products and experiences I&apos;ve helped bring to life.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            className={`project-card${index === 0 ? " project-featured" : ""}`}
            data-scroll-reveal
            key={project.name}
            style={{ "--reveal-delay": `${(index % 2) * 100}ms` }}
          >
            <a
              className="project-image-link"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.name} (opens in a new tab)`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="project-image-arrow" aria-hidden="true">↗</span>
              </div>
            </a>
            <div className="project-card-content">
              <div className="project-meta">
                <span>{project.type}</span><span className="project-meta-dot">·</span><span>0{index + 1}</span>
              </div>
              <div className="project-title-row">
                <h3>{project.name}</h3>
                <a
                  className="project-arrow"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name} (opens in a new tab)`}
                >
                  ↗
                </a>
              </div>
              <p className="body-copy">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
