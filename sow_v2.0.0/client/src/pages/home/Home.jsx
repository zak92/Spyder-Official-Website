import React from 'react'
import { Footer, Header } from '../../containers';
import './home.scss'
import { useCycle } from 'framer-motion';
import VideoContainer from './components/videoContainer/VideoContainer';


const Home = () => {





  return (

    <main style={{
        
        
      //overflow: open ? "hidden" : "auto",
      maxHeight: '100vh',
      overflow: 'auto'
    
      
    }}>

        <Header />


       
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
