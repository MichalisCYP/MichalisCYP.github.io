import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
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
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <span className="sep">|</span>
              <a
                id="linkedinLink"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
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
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ marginRight: "0.5em" }}
                />
              </a>
              <span className="sep">|</span>
              <a id="phoneMe" href={`tel:${links.phone}`} className="button">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ marginRight: "0.5em" }}
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
