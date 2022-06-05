import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="img1" />
          <h3>This is a portfolio item tittle</h3>
          <a href="" className='btn'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>
            Live Demo</a>
        </article>
      </div>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="img1" />
          <h3>This is a portfolio item tittle</h3>
          <a href="" className='btn'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>
            Live Demo</a>
        </article>
      </div>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="img1" />
          <h3>This is a portfolio item tittle</h3>
          <a href="" className='btn'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>
            Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio