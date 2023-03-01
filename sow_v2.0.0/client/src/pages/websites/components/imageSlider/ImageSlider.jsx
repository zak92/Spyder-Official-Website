import React, { useState } from 'react';
import './imageSlider.scss';
import { Images } from './SliderData';

import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'
import a from  '../../../../assets/images/a.JPG'


const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(slides) || slides.length <=0) {
    return null;
  }

  return (
    <div className='slider'>
      <FaArrowCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowCircleRight className='right-arrow' onClick={nextSlide} />
    {Images.map(({ id, image}) => (
      <div className={id === current ? 'slide active' : 'slide'}>
        {id === current && (<img key={id} src={image} alt='' />)}
          
      </div>
        
    
    ))}
    </div>
  )
}

export default ImageSlider


