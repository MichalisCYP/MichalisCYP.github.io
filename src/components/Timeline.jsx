import React from "react";
import DATA from "../data";

const Timeline = () => (
  <div>
    <h2 className="timeline-title">My journey and highlights</h2>
    <div
      className="timeline-card-scroll"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        className="timeline-card flex-row gap radius shadow"
        style={{ alignItems: "center" }}
      >
        {DATA.timeline.map((item, idx) => (
          <div
            key={item.year + item.desc}
            className="timeline-item flex-col"
            style={{ alignItems: "center" }}
          >
            <img src={item.image} alt={item.alt} />
            <div className="timeline-caption flex-col">
              <span className="timeline-year">{item.year}</span>
              <span className="timeline-desc">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Timeline;
