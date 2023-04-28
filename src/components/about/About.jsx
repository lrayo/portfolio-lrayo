import React from 'react'
import './about.css'
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src= { ME } alt="About img" />
          </div>

        </div>
          <div className="about__cars">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUser className='about__icon' />
              <h5>Client</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Project</h5>
              <small>10+ Completed Project</small>
            </article>
          </div>
        <div className="about__content">

        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus dolorem ad nulla officiis, fugiat, voluptates odio non veritatis laboriosam magnam dicta mollitia laudantium vitae voluptatibus dolores iure fugit cum
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </section>
  )
}

export default About