
import React, { useState } from 'react'
import { slideData } from './slideData'

import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

export default function imageSlides({slides}) {

    const[current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
     
      setCurrent(current===length -1 ? 0 : current +1)
    }
    const prevSlide = () => {
      setCurrent(current===0 ? length -1 : current -1)
    }
console.log(current)

    if(!Array.isArray(slides) || slides.length <=0){
      return null;
    }



  return (
      <div className='slide'>
       
        <div className='slidein'>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
         <>
         {slideData.map((slide, index)=>{
           return(
            <div className={index===current? 'slide active' : 'slide'} key={index}>
              {index===current && (<img src={slide.image} className="image" alt='imagee'/>)}
           
            </div>
           )
         })}
         </>
        </div>
      </div>
  )
};

