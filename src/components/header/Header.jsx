import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Avatar-Maker.png'
import HeaderSocials from './HeaderSocials'
import DemoMe from '../../assets/demome1.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Atharv Arya</h1>
        <h5 className='text-light'>MERN Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt='me' className=' me-img' ></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header