import React, { useState, useRef, useEffect, useCycle } from 'react'
import { Navigation } from './components'
import './header.scss'
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';

import { TbMenu } from 'react-icons/tb';



import { useInView } from 'react-intersection-observer';


 

  


const Header = () => {

  const { ref:logoRef, inView: logoVisible} = useInView({
    /* Optional options */
    threshold: 0,
  });

//const myRef =useRef();
const [ open, setOpen] = useState(false);
//const [open, cycleOpen] = useCycle(false, true);

const openMenu = () => {

  setOpen(!open);
  
   }
  return (

    
   <div  style={{
   
      //position: 'relative'
     

   }}>
    
  
     <Navigation open={open}/>


     {/* <MenuBtn open={open} openMenu={openMenu} /> */}
     <div 
    className='logo-container'
    
    style={{
      
      position: 'relative',
    
     
    }}>
   
          
          <div ref={logoRef} 
          className='spyder-logo'>
          SPYDER
          </div>
    </div>
  <div style={{
      //position: 'relative',
  }}>
      <div className="btn-container">
   
  
      
        <button  className={ logoVisible ? 'menu-btn' : 'menu-btn-scroll'} onClick={openMenu}>{
        
        open ?  <RiCloseFill className='menu-close-icon' /> :  <RiMenu4Fill className='menu-open-icon'/>
        
        
        }</button>


      </div>
      </div>


 
     </div>

    
  );
    
  
}

export default Header
