import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faYoutube, faFacebook, faTwitter, faLinkedin, faInstagram, faMailchimp, faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import { faMailBulk, faMailForward, faMessage, faVoicemail } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <div className='home'>
    <div className='qq'>
      <h1>About GUVI</h1>
   <p>
   Groundup is a vocational training institution that offers versatile vocational training 
    at professional level. It is a registered institution whose modus operandi is to
    giving every Nigerian a skill privilege of practical innovative knowledge 
     towards  creating modern technological devices, vocational skills, etc therein creating wealth and improving in the lack
    of tech no how across the world. 
   </p>
   <h3 style={{color:"#1da1f2"}}>MISSION</h3>
   <p>
   To be the top five tech service and vocational skills trainer in Africa and top fifty globally therein changing the developmental
    trajectory of Africa as a continent where technology drives the economy and practical skills and innovation the watch word hence, 
    providing alternative economic source with great values within and outside Africa. 
   </p>
   <p>
     To train 1000+ skilled professionals annually, taking the lead path of employment for unempolyed youths across Africa within a period of 5 years at most.
   </p>

   <h3 style={{color:"#1da1f2"}}>VISION</h3>

   <p>
To making Africa a giant tech environment in terms of skilled labour and innovative hub; attracting investors and creating employment opportunities
thereby reducing the unemployment rate in Africa. 
   </p>
   <h3 style={{color:"#1da1f2"}}>OBJECTIVES</h3>
   <p>
  <ol>
    <li> ✅ To provide hands-on practical skills across Africa with global extension</li>
    <li> ✅ To train professionals in various capacities</li>
    <li> ✅ To provide a lead path for better employment</li>
    <li> ✅ To change Africa labour market status quo</li>
    <li> ✅ To train productive and efficient employees</li>
    <li> ✅ To provide enabling learning environment</li>
  </ol>
   </p>

   <hr/>
   <div style={{display:"flex",justifyContent:"space-between"}}>
     <a href="#" style={{ borderRight:"3px solid red",  paddingRight:"5PX"}} >Blog</a> 
     <div > <a href="#" style={{ borderRight:"3px solid red", paddingRight:"5PX"}} ><  FontAwesomeIcon icon={faVoicemail}  />  Voicemail</a></div>
     <div> <a href="#"> GIST</a></div>
   </div>
   <hr/>
    </div>

    
<footer className='footer'>
        
        <div id="contact">
          <hr></hr>
            <h5>CONTACT</h5>
            <>7th avenue 23Rd Festac Town, Lagos</> <br/>                      
            {/* Email: <a href="samuelblessed38@gmail.com"> <div className='linda' style={{padding: "2px"}}>< FontAwesomeIcon icon={faMailBulk}  /></div></a> <br/>                       */}
            <a href='https://wa.me/2348131180426'>< FontAwesomeIcon icon={faWhatsapp}  /></a> <> +2348131180426</>  <br/>
            <>📞 +2347089302154</>
        </div>

    <div className='media'>
      <hr></hr>
        <h5>MEDIA</h5>
        <a href='#'> <div className='face' style={{padding:".5rem"}}> < FontAwesomeIcon icon={faFacebook}  /> </div></a>
    <a href='https://twitter.com/guvic_io?t=k1i9sxU6SWhdoT0CLMoxtg&s=09'><div className='twitt' style={{padding:".5rem"}}> < FontAwesomeIcon icon={faTwitter}  /></div></a>
   <a href='#'> <div className='linda' style={{padding:".5rem"}}> < FontAwesomeIcon icon={faLinkedin}  /></div></a>
   <a href='https://www.instagram.com/p/CV4BY_nIV3q/?igshid=MDJmNzVkMjY='> <div className='insta' style={{padding:".5rem"}}> < FontAwesomeIcon icon={faInstagram}  /></div></a>
   

    </div>
<div style={{textAlign:"center"}}>
  <hr></hr>
    All right reserved <br/>
  copyright  &copy; 2022 GUVI training institute 
</div>

    </footer>
    </div>
  )
}
