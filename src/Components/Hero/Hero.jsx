import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  const scrollToMiddle = () => {
    window.scrollTo({
      top: window.innerHeight, 
    });
  }
  
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>Collection</p>
            <p>for everyone</p>
        </div>
        <div onClick={scrollToMiddle}className="hero-latest-btn">
            <div >Latest Collections</div>
            <img src={arrow_icon}alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
