import React, { useState, useRef, useEffect, useCycle } from 'react'

import { Navigation } from './components'

import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';
import { useInView } from 'react-intersection-observer';

import './header.scss'

const Header = () => {

  // menu functionality
  const [ open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  }

  const { ref: logoRef, inView: logoVisible} = useInView();
  
  return (

   <div>

     <Navigation open={open}/>

      {/* logo */}
      <div className='logo-container'>
        <div ref={logoRef} className='spyder-logo'>SPYDER</div>
      </div>

      {/* menu button */}
      <div className="btn-container">
        <button  
        className={ logoVisible ? 'menu-btn' : 'menu-btn-scroll'} 
        onClick={openMenu}> {
          open ?  <RiCloseFill className='menu-close-icon' /> : <RiMenu4Fill className='menu-open-icon'/>
        }
        </button>
      </div>
   

     </div>

    
  );
    
  
}

export default Header
