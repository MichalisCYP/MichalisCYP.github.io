import React from "react";

const Education = () => (
  <section id="education" className="section">
    <div className="container">
      <h2>Education & Modules</h2>
      <div className="card">
        <h3>Subject areas</h3>
        <p className="muted">Filter modules by area.</p>
        <div
          id="subjectFilters"
          className="chips"
          aria-label="Subject filters"
        ></div>
      </div>
      <div
        id="educationList"
        className="stack"
        aria-label="Education list"
      ></div>
    </div>
  </section>
);

export default Education;
