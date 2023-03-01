import React, { useState, useRef, useEffect } from 'react';
import { Footer, Header } from '../../containers';
import { useCycle } from 'framer-motion';
import './websites.scss';
import MoneyIcon from '../../assets/images/money.svg';
import LeadsIcon from '../../assets/images/leads.svg';
import CallIcon from '../../assets/images/call.svg';
import BrandIcon from '../../assets/images/brand.svg';
import GraphIcon from '../../assets/images/graph.svg';
import EmailListIcon from '../../assets/images/email-list.svg';

import Backups from '../../assets/images/backups.svg'
import Analytics from '../../assets/images/analytics.svg'
import Api from '../../assets/images/api.svg'
import Automation from '../../assets/images/automation.svg'
import Cro from '../../assets/images/cro.svg'
import Security from '../../assets/images/data-security.svg'
import Email from  '../../assets/images/email.svg'
import Speed from '../../assets/images/speed.svg'
import Support from '../../assets/images/support.svg'
import Seo from '../../assets/images/seo.svg'


import { ImageSlider } from './components';
import { Images } from './components/imageSlider/SliderData';

import { useInView } from 'react-intersection-observer';

const moreBenefits = [
  { name: 'Backups', component: Backups, id: 1 },
  { name: 'Analytics', component: Analytics, id: 2 },
  { name: 'Data Security', component: Security, id: 3 },
  { name: 'Support', component: Support, id: 4 },
  { name: 'Fast Speed', component: Speed, id: 5 },
  { name: 'API Integrations', component: Api, id: 6 },
  { name: 'Automation', component: Automation, id: 7 },
  { name: 'Conversion Optimization', component: Cro, id: 8 },
  { name: 'Email Drip Campaigns', component: Email, id: 9 },
  { name: 'Search Engine Optimization', component: Seo, id: 10 },



];

// framer animations - https://www.youtube.com/watch?v=q9tpBtvTTz8
// menu https://codesandbox.io/s/react-router-bootstrap-offcanvas-menu-forked-0i4wl?file=/src/components/Navbar.js:1339-1369

const Websites = () => {
//https://www.youtube.com/watch?v=r1auJEf9ISo
  const { ref:myRef, inView: elementVisible} = useInView({
    /* Optional options */
    threshold: 0,
  });

  const { ref:pasRef, inView: pasVisible} = useInView({
    /* Optional options */
    threshold: 0,
  });
  //const [open, cycleOpen] = useCycle(false, true);



  return (
 <>
    
    <main style={{
        
        
      //overflow: open ? "hidden" : "auto",
      maxHeight: '100vh',
      overflow: "auto"
    
      
    }}>
 
 
   
 <Header />
 
 
  
 

      <div className='web-headline-container'>
     

        <div className='website-headline-text'>
          <h1>Stop sabotaging your sales with your website</h1>
          <p className='subheading'>Power up your business with a high converting website.</p>
          <div>
            <a href='/book'>Book a Call</a>
          </div>
        </div>
      </div>


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
      <div className='web-cta-2'>
        <a href='/book'>Book a Call</a>
      </div>
      </div>
    </div>

    <div ref={myRef} style={{
      backgroundColor:  'rgb(40, 40, 43)', // matte black
      padding: '3em',
      transition: 'opacity 1s',
      opacity: elementVisible ? '1' : '0'

    }}>
  

  <h1 style={{fontSize: '2.75em', fontFamily: 'Poiret One, sans-serif'}}>What we do for you</h1>
 
        
    <div 
      className='boxes'
      >
      <div className='box'>
      
        <div className='box-content'>
        <img src={MoneyIcon}  alt="React Logo" />
         <h1>Convert website traffic into paying customers</h1>
        <p>We help you convert more of your website traffic through conversion-centered design and direct response copywriting</p>
        </div>
      </div>

      <div className='box'>
        <div className='box-content'>
        <img src={LeadsIcon} alt="React Logo" />
         <h1>Generate more high-quality leads</h1>
        <p>We generate leads by integrating forms, email capture and exit-intent technology into your website. </p>
        </div>
      </div>

      <div className='box'>
        <div className='box-content'>
        <img src={GraphIcon}  alt="React Logo" />
         <h1>Track the ROI of your website </h1>
        <p>Eliminate your uncertainty with access to performance metrics that matter. </p>
        </div>
      </div>

      <div className='box'>
        <div className='box-content'>
        <img src={CallIcon} alt="React Logo" />
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
        <img src={BrandIcon} style={{ }} alt="React Logo" />
         <h1>Boost your brand </h1>
        <p>Your website is the face of your brand. Incorporate your brand narrative into your website with essential branding elements. </p>
        </div>
      </div>

     

    </div>

    <div className='web-cta'>
        <a href='/book'>Book a Call</a>
      </div>

    <div>

    </div>

    </div>


    <div className='price-container'>
      <div style={{
        margin: 'auto'
      }}>
      <h1>Pricing</h1>
      </div>
        
        <div className='price-cards'>

          <div className='price-card'>
            <h2>Website</h2>
            <h4>From $ 2 999*</h4>
            <ul>
              <li>Conversion-centered design </li>
              <li>Copywriting for conversion </li>
              <li>Integrations</li>
              <li>Sales funnels</li>
              <li>Website automation </li>
              <li>Analytics integration </li>
              <li>Foundational SEO</li>
            </ul>
            <div className='price-cta'>
              <a href='/book'>Book a Call</a>
            </div>
          </div>

          <div className='price-card'>
            <h2>Landing Page</h2>
            <h4>From $ 899*</h4>
            <ul>
              <li>Conversion-centered design </li>
              <li>Copywriting for conversion </li>
              <li>Integrations</li>
              <li>Sales funnels</li>
              <li>Website automation </li>
              <li>Analytics integration </li>
              <li>Foundational SEO</li>
            </ul>
            <div className='price-cta'>
              <a href='/book'>Book a Call</a>
            </div>
          </div>

        </div>
   
      <p style={{
        color: 'white',
        position: 'relative',
        bottom: 0,
        left: 0
      }}>*PPP</p>
    </div>
      
      <div className='more-benefits'>
      <h1>Drive more sales</h1>
      <div className='more-benefits-container'>
          
          {moreBenefits.map(({ name, component, id }) => (
          <div  className='benefit-block'
            key={id}
          >
             <img src={component} style={{ }}  alt="React Logo" />
            <h3>{name}</h3>
          </div>
        ))}
        </div>
      </div>
       

        <div className='cta-section'>
          <div className='cta-container'>
            <div className='cta-content'>
              <div className='cta-text'>
                <h2>Are you ready for it?</h2>
                <p>Start getting the results you want today with a powerful website in your arsenal.</p>
                
                </div>

                <div className='cta-btn'>
                <a href='/book'>Book a Call</a>
                
              </div>
            </div>
          </div>

        </div>




        <Footer />
      
        </main>
        </>
  )
}

export default Websites
