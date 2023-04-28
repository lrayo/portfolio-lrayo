import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__forntend">
          <h3>Frontend Development</h3>
          <div className="experence__content">
            <article className="experence__detail">
              <BsPatchCheckFill className="experence__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experence__detail">
              <BsPatchCheckFill className="experence__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experence__detail">
              <BsPatchCheckFill className="experence__icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experence__detail">
              <BsPatchCheckFill className="experence__icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experence__detail">
              <BsPatchCheckFill className="experence__icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experence__detail">
              <BsPatchCheckFill className="experence__icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* End of fontend */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experence__content">
            <article className="experence__detail">
              <BsPatchCheckFill className="experence__icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experence__detail">
              <BsPatchCheckFill className="experence__icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experence__detail">
              <BsPatchCheckFill className="experence__icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experence__detail">
              <BsPatchCheckFill className="experence__icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experence__detail">
              <BsPatchCheckFill className="experence__icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experence__detail">
              <BsPatchCheckFill className="experence__icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
