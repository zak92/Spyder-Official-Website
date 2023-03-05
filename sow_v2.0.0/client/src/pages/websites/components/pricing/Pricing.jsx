import React from 'react'
import './pricing.scss'
import { BsCheck2Circle } from 'react-icons/bs';

import { CTA } from '../../../../components';

const Pricing = () => {
  return (
    <div className='price-container'>
      <h1>Pricing</h1>
  
        <div className='price-cards'>

          <div className='price-card'>
            <h2>Website</h2>
            <h4>From $ 2 999*</h4>
            <div className='feature-list'>
            <ul>
              <li><BsCheck2Circle /> Conversion-centered design </li>
              <li><BsCheck2Circle /> Copywriting for conversion </li>
              <li><BsCheck2Circle /> Integrations</li>
              <li><BsCheck2Circle /> Sales funnels</li>
              <li><BsCheck2Circle /> Website automation </li>
              <li><BsCheck2Circle /> Analytics integration </li>
              <li><BsCheck2Circle /> Foundational SEO</li>
            </ul>
            </div>
            <CTA styleName1='pricing-cta-container' styleName2='pricing-cta'/>
          </div>

          <div className='price-card'>
            <h2>Landing Page</h2>
            <h4>From $ 899*</h4>
            <div className='feature-list'>
              <ul>
                <li><BsCheck2Circle /> Conversion-centered design </li>
                <li><BsCheck2Circle /> Copywriting for conversion </li>
                <li><BsCheck2Circle /> Integrations</li>
                <li><BsCheck2Circle /> Sales funnels</li>
                <li><BsCheck2Circle /> Website automation </li>
                <li><BsCheck2Circle /> Analytics integration </li>
                <li><BsCheck2Circle /> Foundational SEO</li>
              </ul>
              </div>
            <CTA styleName1='pricing-cta-container' styleName2='pricing-cta'/>
          </div>

        </div>
        
        <div className='ppp'>
        <p>*Purchasing Power Parity deals available</p>
        </div>
   
      
    </div>
  )
}

export default Pricing
