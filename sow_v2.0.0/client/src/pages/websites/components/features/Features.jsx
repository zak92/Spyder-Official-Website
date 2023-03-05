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

const Features = () => {
  return (
    <>
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
     

    
      </>

  )
}

export default Features

