import React from 'react'
import { useCalendlyEventListener, InlineWidget } from 'react-calendly';

import {motion, AnimatePresence } from "framer-motion";
import './scheduleCall.scss'


const ScheduleCall = () => {
 
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{delay: 0.8}}
    className='book-container'>
      
       <div className="book">
       <div className='text'>
        <h1>Book a Call Now</h1>
      </div>
    <div className='widget'>
    <InlineWidget  url="https://calendly.com/spyder/consult-call?hide_event_type_details=1&hide_gdpr_banner=1" style="min-width:300px;height:430px;"/>
    </div>
  </div>
  </motion.div>
  )
}

export default ScheduleCall

