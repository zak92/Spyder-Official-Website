import React from 'react';
import './pas.scss';

import { CTA } from '../../../../components';

import { useInView } from 'react-intersection-observer';

const Pas = () => {

  const { ref:pasRef, inView: pasVisible} = useInView({
    /* Optional options */
    threshold: 0,
  });

  
  return (
    <div  ref={pasRef} className='pas-container'
    style={{
      padding: '6em',
      transition: 'opacity 1s',
      opacity: pasVisible ? '1' : '0'
      
  
    }}
    >
      <div className='pas'>
      <div
      className='pas-content'
     
   
      >
        <p>Your website should be converting enough traffic into customers.  </p><br></br>
        <p>But it's not.</p><br></br>
        <p>Even worse, you don't know how well your website is at generating sales.  </p><br></br>
        <p>You're frustrated and don't know what to do next. </p><br></br>
        <p>If that sounds familiar, let's talk. </p>
      </div>

      <CTA styleName1='pas-cta-container' styleName2='pas-cta' />
  
      </div>
    </div>
  )
}

export default Pas
