import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

import { motion, AnimatePresence } from "framer-motion";
import { SiWhatsapp } from 'react-icons/si';
import { MdOutlineMail } from 'react-icons/md';

import './navigation.scss';


const links = [
  { name: "Websites & Landing Pages", to: "/websites", id: 1 },
  { name: "Ecommerce", to: '/ecommerce', id: 3 },
  { name: "Email Marketing", to: "/email", id: 4 },
  { name: "Databases & APIs", to: "/db-api", id: 5 },
  { name: "Contact", to: "/book", id: 6 },

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
            initial={{ height:0, opacity:1}}
            animate={{
              width: '100%',
              ease: 'easeInOut',
              transition: {duration: 0.5 },
              height: '100vh',
              position: 'absolute',
              top: 0,
              left: 0,
              
            }}
        
            exit={{
               height:0,
              transition: { delay: 1.25, duration: 0.5}
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
                  className='link'
                  to={to}
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
                  style={{color:'white'}}
                  >
                  Book a Call
                  </NavLink>
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
              className='nav-logo'>
              SPYDER
              </motion.div>
      
              <motion.div
              variants={itemVariants}
              >
              <motion.p>
                <SiWhatsapp variants={itemVariants} className='whatsapp-icon' /> 
                 <motion.a variants={itemVariants}  href="tel:+2782 397 1796">+2782 397 1796</motion.a>
              </motion.p>
              <motion.p>
                <MdOutlineMail variants={itemVariants} className='email-icon' /> 
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
