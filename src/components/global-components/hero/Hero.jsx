import React from 'react';

const Hero = (props) => {
  console.log(props);
  return (
    <div className="global__hero">
      <h4 className="global__hero-heading">{props.heading}</h4>
      <p className="global__hero-sub-text">{props.subHeading}</p>
    </div>
  )
}

export default Hero
