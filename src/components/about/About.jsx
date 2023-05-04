import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import AboutMe from '../../assets/aboutme-1.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    

    <div className='container about__container'>
    <div className='about__me'>
      <div className='about__me-image'>
        <img src={AboutMe} alt='About Image'   />
      </div>
      
    </div>
       <div className='about__content'>
       <div className='about__cards'>
        <article className='about__card'>
          <FaAward className ='about__icon'/>
          <h5>Experience</h5>
          <small>1+ years Working</small>
        </article>

        {/* <article className='about__card'>
          <FiUsers className ='about__icon'/>
          <h5>Clients</h5>
          <small>clients number</small>
        </article> */}

        <article className='about__card'>
          <VscFolderLibrary className ='about__icon'/>
          <h5>Projects</h5>
          <small>20+ Completed</small>
        </article>
         </div>
         <p className='p__align'>
           
         Hey there! I'm a web developer who's all about keeping things neat and tidy. 
         I love following industry standards to create websites and web applications that are
          easy to use and look great on any device.I always keep up with the latest trends
           and technologies in the world of web development to make sure I'm delivering the best
            possible results.
         </p>

         <a href='#contact'className='btn btn-primary'>Let's Talk</a>
     

        

      

       </div>
     

    </div>
    

   


    </section>
  )
}

export default About