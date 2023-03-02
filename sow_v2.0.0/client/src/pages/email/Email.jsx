import React from 'react'
import { Footer, Header } from '../../containers';
import { useCycle } from 'framer-motion';
import './email.scss'


const Email = () => {
  //const [open, cycleOpen] = useCycle(false, true);

  return (
    <main style={{
        
        
      //overflow: open ? "hidden" : "auto",
      maxHeight: '100vh',
      position: 'relative',
      overflow: 'auto'
    
      
    }}>
      <div style={{
    position: 'absolute',
    top: 0,
   
    }}>
 
        
        <div 
        className='spyder-logo'>
        SPYDER
        </div>
  </div>
  <Header />
  <div className='email-headline-container'>
     

     <div className='website-headline-text'>
       <h1> Leverage email superpowers for growth success  </h1>
       <p>Build strong relationships with your customers and create lifelong advocates of your brand through the power of email. </p>
       <div>
         <a href='/book'>Book a Call</a>
       </div>
     </div>
   </div>
    </main>
  )
}

export default Email
