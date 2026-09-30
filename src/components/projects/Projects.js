import Durotrade from "../../Assets/durotrade.png";
import Teeflix from "../../Assets/teeflix.png";
import ChatAi from "../../Assets/chat-ai.png";
import Fasttrack from "../../Assets/fast.png";
import Estate from "../../Assets/estate.png";
// import Chat from "../../Assets/chat.png";
import Exam from "../../Assets/exam.png";

const projects = [
  {
    name: "Tee Flix",
    type: "Streaming experience",
    description:
      "A movie discovery and streaming experience powered by TMDB data.",
    image: Teeflix,
    alt: "Tee Flix movie application preview",
    url: "https://tech-flix-beryl.vercel.app",
    tags: ["React", "Redux", "TMDB API"],
  },
  {
    name: "Chat AI",
    type: "Real-time application",
    description:
      "An AI chat app combining real-time messaging, Google sign-in, and content filtering.",
    image: ChatAi,
    alt: "Chat AI application preview",
    url: "https://chat-ai-seven-indol.vercel.app",
    tags: ["React", "Node.js", "Socket.io"],
  },
  {
    name: "Ades Notes",
    type: "Editorial platform",
    description:
      "A practical tech blog sharing useful, how-to-focused articles for developers.",
    image: Fasttrack,
    alt: "WebDev Blog website preview",
    url: "https://webdev-blogg.vercel.app",
    tags: ["React", "TypeScript", "MongoDB"],
  },
  {
    name: "Durotrade Logistics",
    type: "Business website",
    description:
      "A service-focused site with customer enquiries for a Lagos-based shipping company.",
    image: Durotrade,
    alt: "Durotrade Logistics website preview",
    url: "https://durotrade-logistics-git-main-certifiedtboy.vercel.app/",
    tags: ["React", "SEO"],
  },
];

const Projects = () => (
  <section className="projects-section section-padding" id="projects">
    <div className="page-shell">
      <div className="section-heading projects-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>
            Ideas, meet <span>execution.</span>
          </h2>
        </div>
        <p className="heading-aside">
          A selection of products and experiences I&apos;ve helped bring to
          life.
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
                <span className="project-image-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </a>
            <div className="project-card-content">
              <div className="project-meta">
                <span>{project.type}</span>
                <span className="project-meta-dot">·</span>
                <span>0{index + 1}</span>
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
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
