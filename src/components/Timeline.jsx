import React from "react";

const Timeline = () => (
  <div className="timeline-card-scroll">
    <h2 className="timeline-title">My journey</h2>
    <div className="timeline-card flex-row gap radius shadow">
      <div className="timeline-item flex-col">
        <img
          src="/MichalisCYP.github.io/images/cardiff1.jpeg"
          alt="MSc Advanced Computer Science"
        />
        <div className="timeline-caption flex-col">
          <span className="timeline-year">2026</span>
          <span className="timeline-desc">MSc Advanced Computer Science</span>
        </div>
      </div>
      <div className="timeline-item flex-col">
        <img
          src="/MichalisCYP.github.io/images/cardiff2.jpeg"
          alt="BSc Computer Science Graduation"
        />
        <div className="timeline-caption flex-col">
          <span className="timeline-year">2025</span>
          <span className="timeline-desc">BSc Computer Science Graduation</span>
        </div>
      </div>
      <div className="timeline-item flex-col">
        <img
          src="/MichalisCYP.github.io/images/cardiff3.jpeg"
          alt="Student IT Support Agent"
        />
        <div className="timeline-caption flex-col">
          <span className="timeline-year">2024</span>
          <span className="timeline-desc">Year 3</span>
        </div>
      </div>
      <div className="timeline-item flex-col">
        <img
          src="/MichalisCYP.github.io/images/cyprus1.jpeg"
          alt="Digital Mentor"
        />
        <div className="timeline-caption flex-col">
          <span className="timeline-year">2023</span>
          <span className="timeline-desc">Year 2</span>
        </div>
      </div>
      <div className="timeline-item flex-col">
        <img
          src="/MichalisCYP.github.io/images/cyprus2.jpeg"
          alt="Year 1 Computer Science"
        />
        <div className="timeline-caption flex-col">
          <span className="timeline-year">2022</span>
          <span className="timeline-desc">Year 1</span>
        </div>
      </div>
      <div className="timeline-item">
        <img
          src="/MichalisCYP.github.io/images/cyprus3.jpeg"
          alt="Military Service"
        />
        <div className="timeline-caption">
          <span className="timeline-year">2021</span>
          <span className="timeline-desc">Military Service</span>
        </div>
      </div>
    </div>
  </div>
);

export default Timeline;
