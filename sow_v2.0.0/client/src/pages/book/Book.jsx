import React from 'react'
import { Footer, Header } from '../../containers';
import { Headline, ScheduleCall } from './components';
import './book.scss'
import {motion, AnimatePresence, useCycle } from "framer-motion";

const Book = () => {

  const [open, cycleOpen] = useCycle(false, true);


  return (

    <main style={{
        
        
      overflow: open ? "hidden" : "auto",
      maxHeight: '100vh'
    
      
    }}>

<Header open={open} cycleOpen={cycleOpen}/>


       
             <ScheduleCall />
              
          

      </main>

  )
}

export default Book
