import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.jpg'
import Img6 from '../../assets/portfolio6.jpg'
import Img7 from '../../assets/portfolio7.jpg'
import Img8 from '../../assets/portfolio8.jpg'
import Img9 from '../../assets/portfolio9.jpg'

const Portfolio = () => {
const data = [
{
  id: 1,
  image: Img1,
  title: 'Khamsat Clone',
  github: 'https://github.com/Ahmed-ramadan21/khamsat-clone',
  demo: 'https://khamsat-clone-two.vercel.app/'
},
{
  id: 2,
  image: Img8,
  title: 'Facebook Clone',
  github: 'https://github.com/Ahmed-ramadan21/facebook-clone-1',
  demo: 'https://facebook-clone-1-rkpe.vercel.app/'
},
{
  id: 3,
  image: Img2,
  title: 'E-Commerce Store',
  github: 'https://github.com/Ahmed-ramadan21/project-store',
  demo: 'https://project-store-liard.vercel.app/'
},
{
  id: 4,
  image: Img4,
  title: 'E-Commerce Kayan',
  github: 'https://github.com/Ahmed-ramadan21/e-commerce-kayan',
  demo: 'https://e-commerce-kayan.vercel.app/'
},
{
  id: 5,
  image: Img3,
  title: 'Landing Page',
  github: 'https://github.com/Ahmed-ramadan21/project1',
  demo: 'https://project1-dun.vercel.app/'
},
{
  id: 6,
  image: Img6,
  title: 'Landing Page',
  github: 'https://github.com/Ahmed-ramadan21/Dr-Mohamed-ElHelw',
  demo: 'https://dr-mohamed-el-helw.vercel.app/'
},
{
  id: 7,
  image: Img5,
  title: 'Stop watch & watch',
  github: 'https://github.com/Ahmed-ramadan21/stop-watch',
  demo: 'https://stop-watch-mocha.vercel.app/'
},
{
  id: 8,
  image: Img7,
  title: 'To-Do-List',
  github: 'https://github.com/Ahmed-ramadan21/To-Do-List',
  demo: 'https://to-do-list-flax-seven.vercel.app/'
},
{
  id: 9,
  image: Img9,
  title: 'Calculator',
  github: 'https://github.com/Ahmed-ramadan21/calculator',
  demo: 'https://calculator-mocha-eight.vercel.app/'
},
]



  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-buttons">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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