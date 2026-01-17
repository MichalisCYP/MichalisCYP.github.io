import React from "react";
import DATA from "../data";

const Education = () => {
  const { education } = DATA;

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="heading">Education & Modules</h2>
        <div className="stack flex-col gap" aria-label="Education list">
          {education.map((e, i) => (
            <div
              className="improved-card shadow radius-md"
              key={i}
              style={{ marginBottom: 28 }}
            >
              <h3
                style={{
                  margin: "0 0 10px 0",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: 22,
                }}
              >
                {e.degree}
              </h3>
              <div
                className="education-meta flex-row gap"
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 600,
                    fontSize: 18,
                  }}
                >
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
                <span style={{ fontSize: 15 }}>{e.dates}</span>
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
                <div
                  className="modules-list"
                  style={{
                    marginTop: 12,
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 16,
                  }}
                >
                  {e.modules.map((m, j) => (
                    <div
                      className="module-card shadow"
                      key={j}
                      style={{
                        background: "#181818",
                        border: "1.5px solid #292929",
                        borderRadius: "18px",
                        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.13)",
                        padding: "12px 16px 10px 16px",
                        marginBottom: 0,
                      }}
                    >
                      <h4 style={{ margin: "8px 0 4px 0" }}>{m.name}</h4>
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
        {/* Expand/collapse button removed */}
      </div>
    </section>
  );
};

export default Education;
