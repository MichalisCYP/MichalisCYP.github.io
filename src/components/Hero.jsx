import React from "react";


const Hero = () => (
  <section id="about" className="section">
    <div className="container">
      <div className="hero">
        <div className="avatar" aria-label="Profile picture placeholder">
          <img
            id="profilePic"
            src="/images/profile.jpeg"
            alt="Profile Picture"
            className="avatar-img"
          />
        </div>
        <div className="hero-text">
          <h1 id="name">Michael Karamichalis</h1>
          <p id="tagline" className="tagline">
            Your tagline here
          </p>
          <p id="profile" className="profile">
            Short profile description here.
          </p>

          <div className="contact-info">
            <span id="email">michael@email.com</span>
            <span className="sep">|</span>
            <span id="phone">+357 99 999999</span>
            <span className="sep">|</span>
            <a id="portfolioLink" href="#" target="_blank" rel="noreferrer">
              Portfolio
            </a>
          </div>

          <div className="links">
            <a id="githubLink" href="#" target="_blank" rel="noreferrer">
              <i className="fa fa-github fa-lg"></i>
            </a>
            <span className="sep">|</span>
            <a id="linkedinLink" href="#" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin fa-lg"></i>
            </a>
            <span className="sep">|</span>
            <a id="downloadCV" href="/cv.pdf" download className="button">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
