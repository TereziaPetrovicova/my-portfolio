import React from "react";
import "./AboutSection.css";
import githubIcon from "../../assets/icons8-github.svg";
import linkedinIcon from "../../assets/icons8-linkedin.svg";

function AboutSection() {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="background-title">ABOUT ME</div>
        <div className="about-content">
          <h1>About me</h1>
          <p>
            As a software developer, my goal is to create applications that are
            not only functional, reliable, and secure but also aesthetically
            appealing.
          </p>
          <p>
            I prioritize responsive design and intuitive interfaces, with a
            strong focus on delivering an outstanding user experience.
          </p>
          <p>
            My journey in this field is driven by a continuous quest to enhance
            my skills. Whether tackling small projects or navigating complex
            challenges, I am dedicated to broadening my expertise across various
            development domains.
          </p>
        </div>
        <a
          href="https://github.com/TereziaPetrovicova"
          target="_blank"
          className="social-button github"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/ter%C3%A9zia-petrovi%C4%8Dov%C3%A1-a767561b0/"
          target="_blank"
          className="social-button linkedin"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default AboutSection;
