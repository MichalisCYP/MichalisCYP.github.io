import React from "react";

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <h2>Projects</h2>
      <div className="card">
        <h3>Technologies</h3>
        <p className="muted">Tap to filter projects. Tap again to clear.</p>
        <div
          id="techFilters"
          className="chips"
          aria-label="Technology filters"
        ></div>
      </div>
      <div id="projectsGrid" className="grid" aria-label="Projects list"></div>
    </div>
  </section>
);

export default Projects;
