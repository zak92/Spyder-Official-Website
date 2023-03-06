import React from 'react'
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faFacebook,
  faBehance
} from "@fortawesome/free-brands-svg-icons";

import { SiWhatsapp } from 'react-icons/si';
import { MdOutlineMail } from 'react-icons/md';
import { BiCopyright } from 'react-icons/bi';

import { NavLink } from "react-router-dom";

const secLinks = [
  { name: "Websites & Landing Pages", to: "/websites", id: 1 },
  { name: "Ecommerce", to: '/ecommerce', id: 3 },
  { name: "Email Marketing", to: "/email", id: 4 },
  { name: "Contact", to: "/book", id: 5 },


];

const Footer = () => {


 
  
  return (
    <div className='footer-container'>

      <div className='main-footer-content'>
      <div className='socials-footer'>
        <a href="https://web.facebook.com/SpyderBusinessSolutions?_rdc=1&_rdr" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} className='social-icon-footer' />
        </a>
        <a href="https://twitter.com/SpyderBiz" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} className='social-icon-footer' />
        </a>
        <a href="https://www.instagram.com/spyder_business_solutions/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} className='social-icon-footer' />
        </a>
        <a href="https://www.linkedin.com/company/spyder-business-solutions/" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className='social-icon-footer'  />
        </a>
        <a href="https://www.behance.net/spyder-digital" target="_blank" rel="noreferrer" >
        <FontAwesomeIcon icon={faBehance} className='social-icon-footer' />
        </a>
      </div>

      <div className='sec-menu'>
      {secLinks.map(({ name, to, id }) => (
          <NavLink
          reloadDocument
          className='sec-menu-item'
            key={id}
            to={to}
          >
            {name}
          </NavLink>
        ))}
        <a className='sec-menu-item' target="_blank" href='https://affiliates.spyder.digital/'>Affiliate Program</a>
      </div>

      <div className='contact'>
        <div className='info'>
          <SiWhatsapp className='whatsapp-icon' style={{ fontSize: '1.25em', color: 'white', }} /><br></br>
          <a href="tel:+2782 397 1796">+2782 397 1796</a><br></br>
          <MdOutlineMail  className='email-icon' style={{ fontSize: '1.25em', color: 'white'}} /><br></br>
          <a href="mailto:">spyder@spyder.digital</a>
        </div>

        <div className='footer-cta'>
        <NavLink
          reloadDocument
          className='footer-cta-link'
          to='/book'
          >
            Book a Call
          </NavLink>
        </div>
          

      </div>

      </div>
     

      <div className='policies'>  

        <div className='pp'>
         <NavLink
            target='_blank'
            className='pp-link'
            to='#'
          >
            Privacy Policy
          </NavLink>
        </div>

        <div className='tc'>
          <NavLink
            target='_blank'
            className='tc-link'
            to='#'
          >
            Terms & Conditions
          </NavLink>
        </div>

        <div className='copyright'>
          Spyder<BiCopyright />{new Date().getFullYear()}
          </div>

      </div>

    </div>
  )
}

export default Footer
