import React from "react";
import DATA from "../data";

const Education = () => {
  const { education } = DATA;

  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education & Modules</h2>
        <div className="stack flex-col gap" aria-label="Education list">
          {education.map((e, i) => (
            <div className="card radius shadow" key={i}>
              <h3>{e.degree}</h3>
              <div className="education-meta flex-row gap">
                <span>
                  {e.university}
                  <img
                    src={e.logo}
                    alt={`${e.university} logo`}
                    style={{
                      height: 24,
                      marginLeft: 8,
                      verticalAlign: "middle",
                    }}
                  />
                </span>
                <span>{e.dates}</span>
              </div>
              <div className="education-awards flex-row gap">
                {e.grade && <span className="muted radius">{e.grade}</span>}
                {e.awards &&
                  e.awards.map((award, idx) => (
                    <span className="muted radius" key={award + idx}>
                      {award}
                    </span>
                  ))}
              </div>
              {e.modules && (
                <div className="modules-list flex-col gap">
                  {e.modules.map((m, j) => (
                    <div className="module-card radius shadow" key={j}>
                      <h4>{m.name}</h4>
                      {m.tags && (
                        <div
                          className="chips flex-center gap"
                          style={{
                            marginBottom: 8,
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          {m.tags.map((t) => (
                            <span className="chip small radius" key={t}>
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
