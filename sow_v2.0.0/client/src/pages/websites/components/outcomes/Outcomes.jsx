import React from 'react'
import './outcomes.scss'

import { CTA } from '../../../../components';

import MoneyIcon from '../../../../assets/images/money.svg';
import LeadsIcon from '../../../../assets/images/leads.svg';
import CallIcon from '../../../../assets/images/call.svg';
import BrandIcon from '../../../../assets/images/brand.svg';
import GraphIcon from '../../../../assets/images/graph.svg';
import EmailListIcon from '../../../../assets/images/email-list.svg';



const Outcomes = () => {
  return (
    
    <div className='outcomes-container'
    //ref={myRef} 
    style={{
      
      // opacity: elementVisible ? '1' : '0'

    }}>
  

      <h1>What we do for you</h1>
      <div className='boxes'>

        <div className='box'>
          <div className='box-content'>
          <img src={MoneyIcon}  alt='Money Icon'/>
          <h1>Convert website traffic into paying customers</h1>
          <p>We help you convert more of your website traffic through conversion-centered design and direct response copywriting.</p>
          </div>
        </div>

        <div className='box'>
          <div className='box-content'>
          <img src={LeadsIcon} alt='People Icon' />
          <h1>Generate more high-quality leads</h1>
          <p>We generate leads by integrating forms, email capture and exit-intent technology into your website. </p>
          </div>
        </div>

        <div className='box'>
          <div className='box-content'>
          <img src={GraphIcon}  alt='Graph Icon' />
          <h1>Track the ROI of your website </h1>
          <p>Eliminate your uncertainty with access to performance metrics that matter. </p>
          </div>
        </div>

        <div className='box'>
          <div className='box-content'>
          <img src={CallIcon} alt='Call Icon' />
          <h1>Schedule more calls</h1>
          <p>We use integrated scheduling software, purpose-driven copy and strategically placed CTAs for more conversions. </p>
          </div>
        </div>

        <div className='box'>
          <div className='box-content'>
          <img src={EmailListIcon}  alt="React Logo" />
          <h1>Grow your email list </h1>
          <p>Grow your email list with irresistible offers and content upgrades. Encourage more signs ups with email capture boxes, popups or even dedicated landing pages. </p>
          </div>
        </div>

        <div className='box'>
          <div className='box-content'>
          <img src={BrandIcon} alt='Brand Icon' />
          <h1>Boost your brand </h1>
          <p>Your website is the face of your brand. Incorporate your brand narrative into your website with essential branding elements. </p>
          </div>
        </div>

      </div>

      <CTA styleName1='outcomes-cta-container' styleName2='outcomes-cta' />


    </div>
  )
}

export default Outcomes
