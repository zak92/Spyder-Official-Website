import React from 'react'
import './videoContainer.scss'
import videoHome from '../../../../assets/videos/videoHome.mp4';

const VideoContainer = () => {
  
  return (
    <div>
       <div className='overlay'>

       </div>
    
      <div className='sec1'>
      <video   src={videoHome} autoPlay loop muted />
      
      
    
      <div className='content'>
      <h4 className="wordCarousel">
    <span>stop struggling to achieve</span>
    <div>
        {/* <!-- Use classes 2,3,4, or 5 to match the number of words --> */}
        <ul className="flip5">
            <li>sustainable</li>
            <li>predictable</li>
            <li>unstoppable</li>
            <li>explosive</li>
            <li>organic</li>
        </ul>
        
    </div>
    <div className='epi'>growth</div>
</h4>
      </div>

      </div>
      
 
    </div>
    
  )
}

export default VideoContainer
