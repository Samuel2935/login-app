
import React, { useState } from 'react'
import image1 from '../images/trainpics.jpg';
import image2 from '../images/simg.jpg'

import { slideData } from '../slideData'

import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faYoutube, faFacebook, faTwitter, faLinkedin, faInstagram, faMailchimp, faWhatsapp} from "@fortawesome/free-brands-svg-icons"


export default function home({slides}) {


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

    <div className='home'>
<div className='qb'>
<marquee direction="alternate">
<h1>GROUNDUP(GUVI)</h1>
</marquee>
 <blockquote>
 Groundup is a vocational training institution that offers versatile vocational training 
    at professional level. It is a registered institution whose modus operandi is to
    giving every Nigerian a skill privilege of practical innovative knowledge 
     towards  creating modern technological devices, vocational skills, etc therein creating wealth and improving in the lack
    of tech no how across the world. 
 </blockquote>
  
</div>


<div className="imacarousel" style={{backroundImage:{image2}}}>
<marquee behavior="scroll" direction="top">
<img src={image1} alt="3"/>
<img src="https://miro.medium.com/max/1400/0*xSyep4c_vjXcB16f" alt="hello"/>
<img src={image2} alt="image goes here"/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniDm7SJJJINXpmfNroIlDnmtvNnv1OyNtav4j06XZl25rvV1abhL7kwEdBwPf-oUxYyk&usqp=CAU" alt="HELLO"/>
<img src="https://images.creativemarket.com/0.1.0/ps/11789565/220/146/m2/fpnw/wm0/frame-48095445-(2)-.png?1643581439&s=6d1001a45868c29fc87a3da9b18bfeda" alt="HELL"/>
<img src="https://www.researchgate.net/profile/Pasan-Samarakkody/publication/333965929/figure/fig3/AS:772850612965376@1561273353329/4-HTML-PHP-and-JavaScript-code.ppm" alt="HELLO"/>

</marquee>
<span className="text">We are committed as always</span>
<div/>

<div className='bq'>
  <h2>TRAINING/SERVICES</h2>
 <blockquote>
 <ul>
    <li>✅ WEB DESIGN </li>
    <li>✅ WEB DEVELOPMENT </li>
    <li>✅ MOBILE DEVELOPMENT </li>
    <li>✅ PROGRAMMING </li>
    <li>✅ MACHINE LEARNING/AI</li>
    <li>✅ HAIR CUT </li>
    <li>✅ HAIR STYLING </li>
    <li>✅ HAIR COLORING </li>

  </ul>
 </blockquote>
</div>




<div className='slidein'>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
       
         <>
         {slideData.map((slide, index)=>{
           return(
            <div className={index===current? 'slide active' : 'slide'} key={index}>
              {index===current && (<img src={slide.image} className="image"/>)}
              {index===current && (<title src={slide.title}/>)}
           
            </div>
           )
         })}
         </>
         <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </div>

<div style={{borderTop:".5rem #333" , marginTop:"1rem", width:"100%"}}></div>








<footer>
        
        <div id="contact">
          
            <h5>CONTACT</h5>
            <>7th avenue 23Rd Festac city, Lagos</> <br/>                      
         
         <><a href='https://wa.me/2348131180426'>< FontAwesomeIcon icon={faWhatsapp}  /></a> +2348131180426</>  <br/>
            <>📞 +2347089302154</>
        </div>

    <div className='media'>
        <h5>MEDIA</h5>
        <hr></hr>
        <a href='#'> <div className='face' style={{padding:".5rem"}}> < FontAwesomeIcon icon={faFacebook}  /> </div></a>
    <a href='https://twitter.com/guvic_io?t=k1i9sxU6SWhdoT0CLMoxtg&s=09'><div className='twitt' style={{padding:".5rem"}}> < FontAwesomeIcon icon={faTwitter}  /></div></a>
   <a href='#'> <div className='linda' style={{padding:".5rem"}}> < FontAwesomeIcon icon={faLinkedin}  /></div></a>
   <a href='https://www.instagram.com/p/CV4BY_nIV3q/?igshid=MDJmNzVkMjY='> <div className='insta' style={{padding:".5rem"}}> < FontAwesomeIcon icon={faInstagram}  /></div></a>
   

    </div>
<div style={
  {
    textAlign:"center"
  }
}>
  <hr></hr>
    All right reserved <br/>
  copyright  &copy; 2022 GUVI training institute 
</div>

    </footer>

            </div>
                    </div>
   
   
  )
}
