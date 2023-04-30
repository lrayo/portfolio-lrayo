import React from 'react'
import './portfolio.css'
import Img1 from "../../assets/dustBusters.png";
import I2 from "../../assets/portCode.jpeg";
import I3 from "../../assets/portfolio3.jpg";


//Do not use the image in production

const data = [
  {
    id: 1,
    title: 'Household Cleaning Service Platform',
    img: Img1,
    link: "https://github.com/No-Country/c9-32-t-javareact",
    demo: "https://dust-busters.netlify.app/"
  },
  {
    id: 2,
    title: 'Online portfolio creation platform',
    img: I2,
    link: "https://github.com/No-Country/S7-13-T-JAVAREACT",
    demo: "https://www.youtube.com/watch?v=NnIRRvaod_g"
  },
  {
    id: 3,
    title: 'Spring boot course project with crud, login, security and thymeleaf templates',
    img: I3,
    link: "https://github.com/lrayo/ProyectoSpringCOnfenalco",
    demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-desing-web-apps"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, title, img, link, demo }) => {
            return (
              <article key={ id } className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={ img } alt={ title } />
                </div>
                <h3>{ title }</h3>
                <div className="portfolio__item-cta">
                  <a href= { link } className='btn' target='_blank' rel="noreferrer">Github</a>

                  {/*ACA poner  video de demostracion*/}

                  <a href= { demo } className='btn btn-prymary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio