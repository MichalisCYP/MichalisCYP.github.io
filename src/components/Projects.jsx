import React, { useState, useRef, useEffect } from "react";
import DATA from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

// Group tags by category (no text shown, just for grouping in rows)
const TAG_CATEGORIES = [
  {
    name: "Languages",
    tags: ["C++", "C# .NET", "JavaScript", "Java", "PL/SQL", "SwiftUI", "SQL"],
  },
  {
    name: "Software Engineering",
    tags: [
      "Full-Stack",
      "Design Patterns",
      "SOLID Principles",
      "Multithreading",
      "Algorithms",
      "Data Structures",
    ],
  },
  {
    name: "Frontend",
    tags: ["Next.js", "UI UX Design", "React Native", "Expo"],
  },

  {
    name: "Backend & Databases",
    tags: ["Supabase", "MongoDB", "Database Design", "Procedures", "Triggers"],
  },

  {
    name: "Mobile",
    tags: ["Mobile", "iOS", "Android", "WatchOS", "SwiftUI", "React Native"],
  },
  {
    name: "Embedded & IoT",
    tags: ["Arduino", "Embedded Systems", "IoT"],
  },

  {
    name: "Cloud & DevOps",
    tags: ["Supabase", "AWS", "Docker"],
  },

  {
    name: "Networking",
    tags: [
      "Cisco Packet Tracer",
      "VLAN",
      "TCP/IP",
      "Sockets",
      "Networking",
      "DHCP",
    ],
  },
];

// Helper to get all unique tags in the data (for fallback/unknown tags)
const getAllTags = (projects) => {
  const tags = new Set();
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags);
};

// Group tags by category, preserving order in TAG_CATEGORIES, and put unknowns in a final row
const groupTags = (allTags) => {
  const used = new Set();
  const rows = TAG_CATEGORIES.map((cat) => {
    const row = cat.tags.filter((t) => allTags.includes(t));
    row.forEach((t) => used.add(t));
    return row;
  });
  // Add any tags not in categories as a final row
  const unknowns = allTags.filter((t) => !used.has(t));
  if (unknowns.length) rows.push(unknowns);
  return rows.filter((row) => row.length > 0);
};

const Carousel = ({ images, youtube }) => {
  const [index, setIndex] = useState(0);
  const hasVideo = !!youtube;
  const slides = hasVideo ? ["video", ...images] : images;

  const goTo = (i) => setIndex((i + slides.length) % slides.length);

  return (
    <div className="carousel radius shadow">
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
        <div className="carousel-controls flex-center">
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

  const allTags = getAllTags(projects);
  const tagRows = groupTags(allTags);

  // For rendering: pair each row with its category name (or empty string for unknowns)
  const tagRowPairs = tagRows.map((row, i) => ({
    name: TAG_CATEGORIES[i]?.name || "",
    tags: row,
  }));
  const [filters, setFilters] = useState([]);

  const [animKey, setAnimKey] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const lastProjectRef = useRef(null);

  const filtered =
    filters.length > 0
      ? projects.filter((p) => p.tags.some((tag) => filters.includes(tag)))
      : projects;

  // Show max 4 projects unless expanded
  const visibleProjects = expanded ? filtered : filtered.slice(0, 4);

  // Trigger animation key on filter change
  useEffect(() => {
    setAnimKey((k) => k + 1);
    setExpanded(false); // Collapse when filters change
  }, [filters]);

  // Scroll to last visible project only when collapsing (not on initial load)
  const prevExpanded = useRef(expanded);
  useEffect(() => {
    if (prevExpanded.current && !expanded && lastProjectRef.current) {
      lastProjectRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    prevExpanded.current = expanded;
  }, [expanded]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="heading">Projects and Technical Skills</h2>
        <div className="card">
          <div className="filter-header flex-center">
            <p className="muted">Tap to filter projects. Tap again to clear.</p>
            {filters.length > 0 && (
              <button
                className="chip clear-chip"
                onClick={() => setFilters([])}
                aria-label="Clear filters"
              >
                Clear All Filters
              </button>
            )}
          </div>
          <div className="tag-rows" aria-label="Technology filters">
            {tagRowPairs.map((row, i) => (
              <div className="tag-row-wrap" key={i}>
                {row.name && <span className="tag-row-label">{row.name}</span>}
                <div className="chips tag-row flex-center gap">
                  {row.tags.map((tag) => {
                    const isActive = filters.includes(tag);
                    return (
                      <button
                        key={tag}
                        className={isActive ? "chip active" : "chip"}
                        onClick={() => {
                          setFilters((prev) =>
                            isActive
                              ? prev.filter((t) => t !== tag)
                              : [...prev, tag]
                          );
                        }}
                        aria-pressed={isActive}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid improved-grid gap" aria-label="Projects list">
          {visibleProjects.map((p, i) => {
            const isLast = !expanded && i === visibleProjects.length - 1;
            return (
              <div
                className="project-card improved-card shadow radius-md"
                key={p.id}
                data-anim={animKey}
                ref={isLast ? lastProjectRef : null}
              >
                <h4>{p.title}</h4>
                <div className="project-meta flex-row gap">
                  {p.org && <span>{p.org}</span>}
                  <span>{p.dates}</span>
                </div>
                <Carousel images={p.images} youtube={p.youtube} />
                <p>{p.description}</p>

                <div className="project-tags flex-center gap">
                  {p.tags.map((t) => (
                    <span className="chip small radius" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="links flex-center gap">
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
            );
          })}
        </div>
        {filtered.length > 4 && (
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <button
              className="chip expand-chip big-expand"
              style={{
                fontSize: "1.25rem",
                padding: "0.75em 2em",
                minWidth: 180,
                fontWeight: 600,
                borderRadius: 24,
              }}
              onClick={() => setExpanded((e) => !e)}
              aria-label={expanded ? "Collapse projects" : "Expand projects"}
            >
              {expanded ? "Collapse" : "Expand"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
