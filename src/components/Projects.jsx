import React, { useState } from "react";
import DATA from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

const getUniqueTags = (projects) => {
  const tags = new Set();
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
};

const Carousel = ({ images, youtube }) => {
  const [index, setIndex] = useState(0);
  const hasVideo = !!youtube;
  const slides = hasVideo ? ["video", ...images] : images;

  const goTo = (i) => setIndex((i + slides.length) % slides.length);

  return (
    <div className="carousel">
      <div className="carousel-content">
        {hasVideo && index === 0 ? (
          <div className="carousel-video">
            <iframe
              width="500"
              height="300"
              src={youtube.replace("watch?v=", "embed/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img
            src={slides[index] === "video" ? images[0] : slides[index]}
            alt="Project visual"
            style={{ width: "100%", maxHeight: 250, objectFit: "cover" }}
          />
        )}
      </div>
      {slides.length > 1 && (
        <div className="carousel-controls">
          <button onClick={() => goTo(index - 1)} aria-label="Previous slide">
            &#8592;
          </button>
          <span>
            {index + 1} / {slides.length}
          </span>
          <button onClick={() => goTo(index + 1)} aria-label="Next slide">
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const { projects } = DATA;
  const tags = getUniqueTags(projects);
  const [filter, setFilter] = useState(null);

  const filtered = filter
    ? projects.filter((p) => p.tags.includes(filter))
    : projects;

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="card">
          <h3>Technologies</h3>
          <p className="muted">Tap to filter projects. Tap again to clear.</p>
          <div className="chips" aria-label="Technology filters">
            {tags.map((tag) => (
              <button
                key={tag}
                className={filter === tag ? "chip active" : "chip"}
                onClick={() => setFilter(filter === tag ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="grid improved-grid" aria-label="Projects list">
          {filtered.map((p) => (
            <div className="project-card improved-card" key={p.id}>
              <h4>{p.title}</h4>
              <div className="project-meta">
                <span>{p.dates}</span>
                {p.org && <span>{p.org}</span>}
              </div>
              <Carousel images={p.images} youtube={p.youtube} />
              <p>{p.description}</p>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="chip small" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="links">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
                {p.youtube && (
                  <a
                    href={p.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    aria-label="YouTube"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
