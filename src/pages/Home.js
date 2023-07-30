import React, { useState } from 'react';
import image1 from '../images/trainpics.jpg';
import image2 from '../images/simg.jpg';
import image3 from '../images/trainingpics3.jpg'
import image4 from '../images/trainingpics4.JPG'
import image5 from '../images/flyer1.jpg'
import image6 from '../images/flyler.jpg'


import { slideData } from '../slideData';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export default function Home({ slides }) {
  const [current, setCurrent] = useState(0);

  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="home-wrapper">
      <div className="home">
          <h1>GROUNDUP(GUVI)</h1>
        <p>
          Groundup is a vocational training institution that offers versatile
          vocational training at professional level. It is a registered
          institution whose modus operandi is to giving every Nigerian a skill
          privilege of practical innovative knowledge towards creating modern
          technological devices, vocational skills, etc therein creating wealth
          and improving in the lack of tech no how across the world.
        </p>
      </div>

      <div className="imacarousel" >
        <marquee behavior="scroll" direction="top">
          <img src={image1} alt="3" />
          <img
          src={image4}
          alt='iamge4'
          />
          <img src={image2} alt="image goes here" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniDm7SJJJINXpmfNroIlDnmtvNnv1OyNtav4j06XZl25rvV1abhL7kwEdBwPf-oUxYyk&usqp=CAU"
            alt="HELLO"
          />
          <img
            src="https://images.creativemarket.com/0.1.0/ps/11789565/220/146/m2/fpnw/wm0/frame-48095445-(2)-.png?1643581439&s=6d1001a45868c29fc87a3da9b18bfeda"
            alt="HELL"
          />
          <img
            src="https://www.researchgate.net/profile/Pasan-Samarakkody/publication/333965929/figure/fig3/AS:772850612965376@1561273353329/4-HTML-PHP-and-JavaScript-code.ppm"
            alt="HELLO"
          />
          <img src={image3} alt='image'/>
          <img src={image5} alt='image'/>
          <img src={image6} alt='image'/>
    
        </marquee>
        

        <div className="service-list">
          <h2>TRAINING/SERVICES</h2>
          <div>
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
          </div>
        </div>

        <div className="slidein">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />

          <>
            {slideData.map((slide, index) => {
              return (
                <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}
                >
                  {index === current && (
                    <img src={slide.image} className="image" />
                  )}
                  {index === current && <title src={slide.title} />}
                </div>
              );
            })}
          </>
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </div>
        <div className='benefit'>
        <div>
        <h2>TRAINING BENEFITS</h2>
            <ul>
              <li>✅ Hand-on-practical skills</li>
              <li>✅ Internship experience</li>
              <li>✅ Employment opportunities </li>
              <li>✅ Certification</li>
              <li>✅ Self reliance</li>
             
            </ul>
          </div>
        </div>

        <footer>
          <div className="foot">
            <h5>MEDIA</h5>
            <hr/>
            <div>
              <a>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com/guvic_io?t=k1i9sxU6SWhdoT0CLMoxtg&s=09">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a>
                {' '}
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/p/CV4BY_nIV3q/?igshid=MDJmNzVkMjY=">
                {' '}
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <hr/>
          <div className='all-right'>
            <p> All right reserved </p>
            copyright &copy; 2023 GUVI training institute
          </div>
        </footer>
      </div>
    </div>
  );
}
