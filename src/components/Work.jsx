import React from "react";
import DATA from "../data";

const Work = () => (
  <section id="work" className="section">
    <div className="container">
      <h2>Work Experience</h2>
      <div
        id="workList"
        className="grid improved-grid"
        aria-label="Work experience list"
      >
        {DATA.work.map((job, idx) => (
          <div key={idx} className="improved-card shadow radius-md">
            <h3 className="work-role" style={{ marginBottom: 8 }}>
              {job.role}
            </h3>
            <div
              className="work-meta"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <span className="work-org" style={{ color: "#ffffff" }}>
                {job.org}
              </span>
              <span
                className="work-dates"
                style={{ fontSize: 14, color: "#ffffff" }}
              >
                {job.dates}
              </span>
            </div>
            <div className="chips flex-center gap" style={{ marginTop: 8 }}>
              {job.bullets &&
                job.bullets.map((b, i) => (
                  <span
                    className="chip small"
                    key={i}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {b.icon && (
                      <i
                        className={b.icon}
                        aria-hidden="true"
                        style={{ marginRight: 6 }}
                      ></i>
                    )}
                    {b.text}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
