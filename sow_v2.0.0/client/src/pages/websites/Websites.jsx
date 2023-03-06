import React from 'react';
import { Footer, Header, HeroBlock, CTA } from '../../containers';

import { Pas, Outcomes, Pricing, Features } from './components';


import { useInView } from 'react-intersection-observer';

import './websites.scss';



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
<Pricing />
<Features />

<CTA 
  content='Start getting the results you want today with a powerful website in your arsenal.'
  bgColor1='cta-section-background'
  bgColor2='cta-section-btn-background'
/>

<Footer />
      
</main>
</>
  )
}

export default Websites
