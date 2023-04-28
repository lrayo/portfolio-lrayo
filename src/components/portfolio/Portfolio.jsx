import React from 'react'
import './portfolio.css'
import Img1 from "../../assets/portfolio1.jpg";
import I2 from "../../assets/portfolio2.jpg";
import I3 from "../../assets/portfolio3.jpg";
import I4 from "../../assets/portfolio4.jpg";
import I5 from "../../assets/portfolio5.png";
import I6 from "../../assets/portfolio6.jpg";

//Do not use the image in production

const data = [
  {
    id: 1,
    title: 'Crypto currency dashborads and finalcial data visualization',
    img: Img1,
    link: "https://github.com/lrayo",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashborads-and-finalcial-data-visualization"
  },
  {
    id: 2,
    title: 'Chart template for figma and sketch',
    img: I2,
    link: "https://github.com/lrayo",
    demo: "https://dribbble.com/shots/16580766-Orion-UI-Kit-Charts-templates-infographics-in-Figma"
  },
  {
    id: 3,
    title: 'Figma dashboard UI kit for daata desing web apps',
    img: I3,
    link: "https://github.com/lrayo",
    demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-desing-web-apps"
  },
  {
    id: 4,
    title: 'Maintaining tasks and tracking progress',
    img: I4,
    link: "https://github.com/lrayo",
    demo: "https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress"
  },
  {
    id: 5,
    title: 'Charts templates & infographics in Figma',
    img: I5,
    link: "https://github.com/lrayo",
    demo: "https://dribbble.com/shots/16541289-Orion-UI-Kit-Charts-templates-infographics-in-Figma"
  },
  {
    id: 6,
    title: 'Charts templates & infographics in Figma',
    img: I6,
    link: "https://github.com/lrayo",
    demo: "https://dribbble.com/shots/15887665-Orion-UI-Kit-Charts-templates-infographics-in-Figma"
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
                <div className="portfolio__item-iamge">
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