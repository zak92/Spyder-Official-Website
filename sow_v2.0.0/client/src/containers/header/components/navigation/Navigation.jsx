import React, { useState } from 'react';
import './navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Link } from "react-router-dom";


import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

import {motion, AnimatePresence, useCycle } from "framer-motion";
import { SiWhatsapp } from 'react-icons/si';
import { MdOutlineMail } from 'react-icons/md';


const links = [
  { name: "Websites & Landing Pages", to: "/websites", id: 1 },
  { name: "Ecommerce", to: '/ecommerce', id: 3 },
  { name: "Email Marketing", to: "/email", id: 4 },
  { name: "Contact", to: "/book", id: 5 },


];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1,
  }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    }
  }
};



const Navbar = (props) => {
  return (
    
    <AnimatePresence>
        {props.open && (
          <motion.aside
            initial={{ width:0}}
            animate={{
              width: '100vw',
              ease: 'easeInOut',
              
              transition: { duration: 0.25 },
              height: '100vh',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
        
            exit={{
               opacity:0,
              transition: { delay: 1.2, duration: 0.75}
            }}
          >
            <motion.div
              className='container'
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <ul className='nav-links'>
              {links.map(({ name, to, id }) => (
                <motion.li
                  variants={itemVariants}
                  key={id} 
                >
                  <NavLink  
                  reloadDocument
                  key={id} 
                  //className={({ isActive }) => (isActive ? 'active' : 'link')}
                  className='link'
                  to={to}
                  //onClick={() => setOpen(false)}
                  
                  >
                  {name}</NavLink>
                  
                </motion.li>
              ))}
                <motion.li
                variants={itemVariants}
                >
                   <NavLink  
                 reloadDocument
                  className='cta'
                  to='/book'
                  //onClick={() => setOpen(false)}
                  style={{color:'white'}}
                  //whileHover={{color:'black'}}
                  >
                  Book a Call</NavLink>
                  
                
                  
                
                </motion.li>
                </ul>
            </motion.div>

            <motion.div
              className='contact-info-container'
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <motion.div 
              variants={itemVariants}
              className='logo'>
              SPYDER
              </motion.div>
      
              <motion.div
              variants={itemVariants}
              >
              <motion.p>
                <SiWhatsapp variants={itemVariants} className='whatsapp-icon' style={{ fontSize: '0.35em', color: 'white'}} /> 
                 <motion.a variants={itemVariants}  href="tel:+2782 397 1796">+2782 397 1796</motion.a>
              </motion.p>
              <motion.p>
                <MdOutlineMail variants={itemVariants} className='email-icon' style={{ fontSize: '0.4em', color: 'white'}} /> 
                <motion.a  variants={itemVariants} href="mailto:">spyder@spyder.digital</motion.a>
                </motion.p>
            </motion.div>


            <motion.div
            className='socials'
            variants={itemVariants}
            >
            <motion.a
              href='#'
              variants={itemVariants}
            >
              <FontAwesomeIcon icon={faLinkedin} className='social-icon'  />
            </motion.a>
            <motion.a
              href='#'
              variants={itemVariants}
            >
              <FontAwesomeIcon icon={faInstagram} className='social-icon' />
            </motion.a>
            <motion.a
              href='#'
              variants={itemVariants}
            >
              <FontAwesomeIcon icon={faTwitter} className='social-icon' />
            </motion.a>
            <motion.a
              href='#'
              variants={itemVariants}
            >
              <FontAwesomeIcon icon={faFacebook} className='social-icon' />
            </motion.a>
          </motion.div>

      </motion.div>
    </motion.aside>
    )}
  </AnimatePresence>

  
  )
}


export default Navbar