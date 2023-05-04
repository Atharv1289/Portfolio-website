import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io'
;const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Atharv Arya</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>

      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/atharv.arya.39?mibextid=ZbWKwL' target="_blank"><FaFacebookF/></a>
        <a href='https://www.instagram.com/1289_atharv' target="_blank"><FiInstagram/></a>
        <a href='https://www.twitter.com/AtharvArya1289?t=6IAo1pC5_vVwlx0pOuPfpQ&s=08' target="_blank" ><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Atharv Arya. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer