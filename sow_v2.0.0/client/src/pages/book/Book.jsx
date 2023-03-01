import React from 'react'
import { Footer, Header } from '../../containers';
import { Headline, ScheduleCall } from './components';
import './book.scss'
import {motion, AnimatePresence, useCycle } from "framer-motion";

const Book = () => {




  return (

    <main style={{
        
        
      
      maxHeight: '100vh',
      overflow: 'auto'
    
      
    }}>

<Header />


       
             <ScheduleCall />
              
          

      </main>

  )
}

export default Book
