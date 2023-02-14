import React from 'react'
import { Footer, Header } from '../../containers';
import './home.scss'
import {motion, AnimatePresence, useCycle } from "framer-motion";
import VideoContainer from './components/videoContainer/VideoContainer';


const Home = () => {


  const [open, cycleOpen] = useCycle(false, true);


  return (

    <main style={{
        
        
      overflow: open ? "hidden" : "auto",
      maxHeight: '100vh'
    
      
    }}>

        <Header open={open} cycleOpen={cycleOpen}/>


       
             {/* <VideoContainer />  */}
             <div style={{
              height: '1000px',
              backgroundColor: 'black'
             }} >

             </div>
              
          

      </main>



  )
}

export default Home
