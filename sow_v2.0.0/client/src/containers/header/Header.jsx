import React, { useState } from 'react'
import { Navbar, MenuBtn } from './components'
import './header.scss'
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';

const Header = (props) => {


  return (

    <>

    
     <Navbar open={props.open}/>
     <MenuBtn open={props.open} cycleOpen={props.cycleOpen} />
 


    </>
  );
    
  
}

export default Header
