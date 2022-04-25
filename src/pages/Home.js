// import React from 'react'
import React, { useState } from 'react'

import { slideData } from '../slideData'

// import './slide.css'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
// import {icon} from '@mui/icons-material';
// import TwitterIcon from '../node_modules/@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faYoutube, faFacebook, faTwitter, faLinkedin, faInstagram, faMailchimp, faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import { faMailBulk, faMailForward, faMessage, faVoicemail } from '@fortawesome/free-solid-svg-icons'


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
    <div className='hammer'>

    
    <div className='home'>
<div className='qb'>
  <h1>GROUNDUP(GUVI)</h1>
 <blockquote>
 Groundup is a vocational training institution that offers versatile vocational training 
    at professional level. It is a registered institution whose modus operandi is to
    giving every Nigerian a skill privilege of practical innovative knowledge 
     towards  creating modern technological devices, vocational skills, etc therein creating wealth and improving in the lack
    of tech no how across the world. Be glad 😊 to know more <a href='/About'><b>about</b></a> us!!
 </blockquote>
  
</div>

<div className='bq'>
  <h2>TRAINING COURSES/SERVICES</h2>
 <blockquote>
 <ul>
    <li>WEB DESIGN 🕸</li>
    <li>WEB DEVELOPMENT 👩‍💻</li>
    <li>MOBILE DEVELOPMENT 📱</li>
    <li>PROGRAMMING 🦾</li>
    <li>HAIR CUT 💇‍♂️</li>
    <li>HAIR STYLING 👱‍♀️</li>
    <li>HAIR COLORING 👱 </li>

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

{/* <footer>
<div className='contact'>
  <h2>CONTACT</h2>
  
  <div className='icons'>
   <a href='#'> <div className='face' style={{padding:".5rem", backgroundColor:"#1da1f2"}}> < FontAwesomeIcon icon={faFacebook}  /> </div></a>
    <a href='#'><div className='twitt' style={{padding:".5rem", backgroundColor:"#1da1f2"}}> < FontAwesomeIcon icon={faTwitter}  /></div></a>
   <a href='#'> <div className='linda' style={{padding:".5rem", backgroundColor:"#1da1f2"}}> < FontAwesomeIcon icon={faLinkedin}  /></div></a>
   <a href='#'> <div className='insta' style={{padding:".5rem",}}> < FontAwesomeIcon icon={faInstagram}  /></div></a>
   <a href='#'> <div className='youth' style={{padding:".5rem", backgroundColor:"red"}}> < FontAwesomeIcon icon={faYoutube}  /></div></a>

     </div>

     <div/> 
     
   
      


   <div className='foot'>
  
  <span> all right reserved</span> <br></br>
   <span> &copy;  GU 2022</span>
 </div>

</div>

 
</footer> */}


<footer>
        
        <div id="contact">
            <h5>CONTACT</h5>
            <>7th avenue 23Rd Festac city, Lagos</> <br/>                      
            Email: <a href="samuelblessed38@gmail.com"> <div className='linda' style={{padding: "2px"}}>< FontAwesomeIcon icon={faMailBulk}  /></div></a> <br/>                      
            <><a>< FontAwesomeIcon icon={faWhatsapp}  /></a> +2348131180426</>  <br/>
            <>📞 +2347089302154</>
        </div>

    <div className='media'>
        <h5>MEDIA</h5>
        <a href='#'> <div className='face' style={{padding:".5rem"}}> < FontAwesomeIcon icon={faFacebook}  /> </div></a>
    <a href='#'><div className='twitt' style={{padding:".5rem"}}> < FontAwesomeIcon icon={faTwitter}  /></div></a>
   <a href='#'> <div className='linda' style={{padding:".5rem"}}> < FontAwesomeIcon icon={faLinkedin}  /></div></a>
   <a href='#'> <div className='insta' style={{padding:".5rem"}}> < FontAwesomeIcon icon={faInstagram}  /></div></a>
   

    </div>
<div>
    All right reserved <br/>
  copyright  &copy; 2022 GUVI training institute 
</div>

    </footer>

    </div>
    </div>
  )
}
