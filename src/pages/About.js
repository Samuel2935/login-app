import React from 'react';
import styles from './about.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faMailchimp,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMailBulk,
  faMailForward,
  faMessage,
  faVoicemail,
} from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <div className="about">
      <div className="home-wrap">
        <h1>ABOUT GUVI</h1>
        <p>
          Groundup is a vocational training institution that offers versatile
          vocational training at professional level. It is a registered
          institution whose modus operandi is to giving every Nigerian a skill
          privilege of practical innovative knowledge towards creating modern
          technological devices, vocational skills, etc therein creating wealth
          and improving in the lack of tech no how across the world.
        </p>
        <h3>MISSION</h3>
        <p>
          To be the top five tech service and vocational skills trainer in
          Africa and top fifty globally therein changing the developmental
          trajectory of Africa as a continent where technology drives the
          economy and practical skills and innovation the watch word hence,
          providing alternative economic source with great values within and
          outside Africa.
        </p>
        <p>
          To train 1000+ skilled professionals annually, taking the lead path of
          employment for unempolyed youths across Africa within a period of 5
          years at most.
        </p>

        <h3>VISION</h3>

        <p>
          To making Africa a giant tech environment in terms of skilled labour
          and innovative hub; attracting investors and creating employment
          opportunities thereby reducing the unemployment rate in Africa.
        </p>
        <h3>OBJECTIVES</h3>
        <p>
          <ol>
            <li>
              {' '}
              ✅ To provide hands-on practical skills across Africa with global
              extension
            </li>
            <li> ✅ To train professionals in various capacities</li>
            <li> ✅ To provide a lead path for better employment</li>
            <li> ✅ To change Africa labour market status quo</li>
            <li> ✅ To train productive and efficient employees</li>
            <li> ✅ To provide enabling learning environment</li>
          </ol>
        </p>

      </div>

      <footer className="footer">
     
        <div className='contact' id='contact'>
          <h5>Contact</h5>
          <p>7th avenue 23Rd Festac Town, Lagos</p>
          <div className='tsap'>
          <a href="https://wa.me/2348131180426">
            <FontAwesomeIcon icon={faWhatsapp}/>
          </a>
          +2348131180426
          </div>
          <div>
          📞 +2349034605582
          </div>
        </div>

        <div className="media">
          <h5>MEDIA</h5>
            <div >
              <a><FontAwesomeIcon icon={faFacebook} /></a>
              <a><FontAwesomeIcon icon={faTwitter} /></a>
            <a>  <FontAwesomeIcon icon={faLinkedin} /></a>
             <a> <FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>
        <hr/>
        <div className='copyright'>
         <p> All right reserved </p>
         <p> copyright &copy; 2023 GUVI training institute</p>
        </div>
      </footer>
    </div>
  );
}
