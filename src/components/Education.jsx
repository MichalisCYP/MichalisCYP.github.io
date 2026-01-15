import React from "react";
import DATA from "../data";

const Education = () => {
  const { education } = DATA;

  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education & Modules</h2>
        <div className="stack" aria-label="Education list">
          {education.map((e, i) => (
            <div className="card" key={i}>
              <h3>{e.degree}</h3>
              <div className="education-meta">
                <span>{e.dates}</span>
                {e.grade && <span className="muted">{e.grade}</span>}
                {e.awards && (
                  <span className="muted">{e.awards.join(" · ")}</span>
                )}
              </div>
              {e.modules && (
                <div className="modules-list">
                  {e.modules.map((m, j) => (
                    <div className="module-card" key={j}>
                      <h4>{m.name}</h4>
                      {m.tags && (
                        <div
                          className="chips"
                          style={{
                            marginBottom: 8,
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          {m.tags.map((t) => (
                            <span className="chip small" key={t}>
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
