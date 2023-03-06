import React from 'react'
import './features.scss'

import Backups from '../../../../assets/images/backups.svg'
import Analytics from '../../../../assets/images/analytics.svg'
import Api from '../../../../assets/images/api.svg'
import Automation from '../../../../assets/images/automation.svg'
import Cro from '../../../../assets/images/cro.svg'
import Security from '../../../../assets/images/data-security.svg'
import Email from  '../../../../assets/images/email.svg'
import Speed from '../../../../assets/images/speed.svg'
import Support from '../../../../assets/images/support.svg'
import Seo from '../../../../assets/images/seo.svg'

const features = [
  { name: 'Backups', alt: 'backups', component: Backups, id: 1 },
  { name: 'Analytics', alt: 'analytics doc', component: Analytics, id: 2 },
  { name: 'Data Security', component: Security, id: 3 },
  { name: 'Support', alt: 'headphones', component: Support, id: 4 },
  { name: 'Fast Speed', alt: 'speedometer', component: Speed, id: 5 },
  { name: 'API Integrations', alt: 'API', component: Api, id: 6 },
  { name: 'Automation', alt: 'automation', component: Automation, id: 7 },
  { name: 'Conversion Optimization', alt: 'optimization', component: Cro, id: 8 },
  { name: 'Email Drip Campaigns', alt: 'email', component: Email, id: 9 },
  { name: 'SEO', alt: 'SEO', component: Seo, id: 10 },



];

const Features = () => {
  return (
    <>
    <div className='features'>
    <h1>Drive more sales</h1>
    <div className='features-container'>
        
        {features.map(({ name, component, alt, id }) => (
        <div className='feature-block' key={id}  >
          <div className='feature'>
          <img src={component}  alt={alt} />
          <h3>{name}</h3>
          </div>
           
        </div>
      ))}
      </div>
    </div>
     

    
      </>

  )
}

export default Features

