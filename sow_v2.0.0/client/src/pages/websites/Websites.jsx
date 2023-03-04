import React from 'react';
import { Footer, Header, HeroBlock } from '../../containers';




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


import { Pas, Outcomes } from './components';


import { useInView } from 'react-intersection-observer';

import './websites.scss';

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

 




  return (
 <>
    
 <main
 style={{
  maxHeight: '100vh',
  overflow: 'auto'
 }}
 
 >


 <Header />

 <HeroBlock 
    headline='Stop sabotaging your sales with your website' 
    subheading='Power up your business with a high converting website.'
    styleName='web-headline'
  />

 <Pas />
<Outcomes />
    



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
      }}> Parity deals available - We support Parity Purchasing Power</p>
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
          <div className='ctas-container'>
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
