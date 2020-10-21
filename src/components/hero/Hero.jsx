import React from 'react';
import heroImg from '../../assets/home/desktop/image-hero-phone.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__text-wrapper">
        <h2 className="hero__lead-text">
          Award-winning custom designs and digital branding solutions
        </h2>
        <p className="hero__sub-text">
          With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
        </p>
        <button className="hero__cta-btn">Learn More</button>
      </div>
      <div className="hero__img-wrapper">
        <img src={heroImg} alt="hero phone" className="hero__img" />
      </div>
    </section>
  )
}

export default Hero