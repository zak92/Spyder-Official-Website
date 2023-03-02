import React from 'react'
import './heroBlock.scss';

import { NavLink } from "react-router-dom";

const HeroBlock = (props) => {
  return (
    <div className={`headline-container ${props.styleName}`}>
      <div className='headline-text'>
        <h1>{props.headline}</h1>
        <p className='subheading'>{props.subheading}</p>
        <div>
          <ul>
            <li>
              <NavLink  
              reloadDocument
              className='hero-block-cta'
              to='/book'
              >
              Book a Call
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default HeroBlock
