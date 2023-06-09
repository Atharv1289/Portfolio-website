import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'


const Expericence = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>

        {/* ======FrontEnd==== */}
        <div className='experience__frontend'>
        <h3>Frontend Developer</h3>
        <div className='experience__content'>
          <article className='experience__details'>
          
          <BsPatchCheckFill className='experience__details-icon'/>
           
           <div>
           <h4>HTML</h4>
           <small className='text-light'>Expericenced</small>
          </div>
          </article>

          <article className='experience__details'>

          <BsPatchCheckFill className='experience__details-icon'/>

            <div>
            <h4>CSS</h4>
           <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>JavaScript</h4>
           <small className='text-light'>Expericenced</small>
           </div>
          </article>
         
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Tailwind</h4>
           <small className='text-light'>Expericence</small>
            </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>React</h4>
           <small className='text-light'>Expericence</small>
             </div>
          </article>
        </div>

        </div>

        {/* ======BackEnd==== */}


        <div className='experience__backend'>
        <h3>Backend Development</h3>
        <div className='experience__content'>
          <article className='expericence__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Node JS</h4>
           <small className='text-light'>Expericenced</small>
             </div>
          </article>
          <article className='expericence__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>MongoDB</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>
          <article className='expericence__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>MySQL</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>
          <article className='expericence__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>Express</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>
        
        </div>
          
          </div>
      </div>
    </section>
  )
}

export default Expericence