import React from "react";
import "./about.css";

import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src='https://i.ibb.co/YQzVBgd/Me.png' alt="About img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Client</h5>
              <small>6+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
          "I am passionate about technology and software development. I continue to learn every day and have been working on personal projects to improve my skills, as well as collaborating with teams. My goal is to become an experienced fullstack developer and help create technological solutions that make life easier and more interesting for people. If you're interested in working with me or just want to connect, please don't hesitate to get in touch. Thank you for visiting my site!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
