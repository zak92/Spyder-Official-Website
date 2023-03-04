import React from 'react'
import './heroBlock.scss';

import { CTA } from '../../components';


const HeroBlock = (props) => {
  return (
    <div className={`headline-container ${props.styleName}`}>
      <div className='headline-text'>
        <h1>{props.headline}</h1>
        <p className='subheading'>{props.subheading}</p>
        
        <CTA styleName1='hero-cta-container' styleName2='hero-cta'/> 
      </div>
    </div>

  )
}

export default HeroBlock
