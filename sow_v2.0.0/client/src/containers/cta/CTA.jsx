import React from 'react'
import './cta.scss';

import { CTA as CTAButton } from '../../components';


const CTA = (props) => {
  return (
    <div className='cta-section'>
        <div className={`cta-container-section ${props.bgColor1}`}>
          <div className='cta-content'>
            <div className='cta-text'>
              <h2>Are you ready for it?</h2>
              <p>{props.content}</p>
              </div>
              <CTAButton 
                  styleName1='cta-cta-container'
                  styleName2={`cta-cta ${props.bgColor2}`}
              />  
          </div>
        </div>

      </div>
  )
}

export default CTA
