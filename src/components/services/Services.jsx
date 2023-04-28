import React from 'react'
import './services.css'
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototyping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Usability Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interaction Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Design</p>
            </li>
          </ul>
        </article>

        {/* End of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototyping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Usability Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interaction Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Design</p>
            </li>
          </ul>
        </article>

        {/* End of web devopment */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototyping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Usability Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interaction Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Design</p>
            </li>
          </ul>
        </article>

        {/* End of Content Creation */}

      </div>
    </section>
  )
}

export default Services