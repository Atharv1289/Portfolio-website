import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const data = [
  {
    id: 1,
    title: ' Portfolio ',
    image: IMG1,
    github: 'https//github.com',
    demo : 'https//github.com'

  },
  {
    id: 2,
    title: 'Code Blog Web App ',
    image: IMG2,
    github: 'https//github.com',
    demo : 'https://codeblogapp.netlify.app/'

  },
  {
    id: 2,
    title: 'Study Notion web App',
    image: IMG3,
    github: 'https//github.com',
    demo : 'https://studynotionproject.netlify.app/signup'

  }
]
  
 const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <img src={image} alt={title} className='image-portfolio'/>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
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