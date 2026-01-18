import React from "react";
import DATA from "../data";

const Hero = () => {
  const { name, tagline, profile, links } = DATA.person;
  return (
    <section id="about" className="section">
      <div style={{ alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* avatar */}
          <div
            className="avatar"
            aria-label="Profile picture"
            style={{ marginRight: "2rem" }}
          >
            <img
              id="profilePic"
              src="/MichalisCYP.github.io/images/profile.jpeg"
              alt="Profile Picture"
              className="avatar-img"
            />
          </div>
          {/* hero info (text + links) */}
          <div
            style={{
              maxWidth: "50%",
            }}
          >
            <div className="hero-text">
              <h1 id="name">{name}</h1>
              <p id="tagline" className="tagline">
                {tagline}
              </p>
            </div>

            <div className="links">
              <a
                id="githubLink"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/MichalisCYP.github.io/images/github.svg"
                  alt="GitHub"
                  style={{ width: 36, height: 36, verticalAlign: "middle" }}
                />
              </a>
              <span className="sep">|</span>
              <a
                id="linkedinLink"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/MichalisCYP.github.io/images/linkedin.svg"
                  alt="LinkedIn"
                  style={{ width: 36, height: 36, verticalAlign: "middle" }}
                />
              </a>
              <span className="sep">|</span>
              <a
                id="downloadCV"
                href="/MichalisCYP.github.io/images/MichaelKaramichalisCV.pdf"
                download
                className="button"
              >
                Download CV
              </a>
              <span className="sep">|</span>
              <a id="emailMe" href={`mailto:${links.email}`} className="button">
                <img
                  src="/MichalisCYP.github.io/images/mail.svg"
                  alt="Email"
                  style={{ width: 36, height: 36, verticalAlign: "middle" }}
                />
              </a>
              <span className="sep">|</span>
              <a id="phoneMe" href={`tel:${links.phone}`} className="button">
                <img
                  src="/MichalisCYP.github.io/images/phone.svg"
                  alt="Phone"
                  style={{ width: 36, height: 36, verticalAlign: "middle" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
