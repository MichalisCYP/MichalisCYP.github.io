import React from "react";

const Header = () => (
  <header className="site-header">
    <div className="container nav-wrap flex-center gap">
      <img src="/MichalisCYP.github.io/images/cyprus.svg" alt="Logo" className="cyprus-flag" />
      <nav className="nav flex-center gap" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work Experience</a>
      </nav>
      <button
        className="nav-toggle"
        id="navToggle"
        aria-label="Toggle menu"
        aria-expanded="false"
      >
        ☰
      </button>
    </div>
  </header>
);

export default Header;
