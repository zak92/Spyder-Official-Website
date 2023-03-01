import React from 'react'
import { Footer, Header } from '../../containers';
import { useCycle } from 'framer-motion';
import './ecommerce.scss'


const Ecommerce = () => {




  return (
    <main style={{
        
        
      overflow: 'auto',
      maxHeight: '100vh',
      position: 'relative'
    
      
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
  <div className='ec-headline-container'>
     

     <div className='ec-headline-text'>
       <h1>Get paying shoppers.  <br></br>
          And keep them. </h1>
       <p>Take back control of your ecommerce store and achieve the results you want with growth-driven ecommerce strategies.</p>
       <div>
         <a href='/book'>Book a Call</a>
       </div>
     </div>
   </div>
      
    </main>
  )
}

export default Ecommerce
