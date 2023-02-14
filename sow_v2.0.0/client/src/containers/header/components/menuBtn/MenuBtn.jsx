import React from 'react'
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';
import { TbMenu } from 'react-icons/tb';
import './menuBtn.scss';

const MenuBtn = (props) => {
  return (
   
      <div className="btn-container">
        <button onClick={props.cycleOpen}>{
        
        props.open ?  <RiCloseFill className='menu-close-icon' /> :  <RiMenu4Fill className='menu-open-icon'/>
        
        
        }</button>
      </div>
 
  )
}

export default MenuBtn
