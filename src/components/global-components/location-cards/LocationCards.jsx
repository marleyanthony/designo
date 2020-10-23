import React from 'react';
import locationCardsInfo from './locationCardsInfo';

const LocationCards = () => {
  return (
    <div className="about__location-card-wrapper">
      {
        locationCardsInfo.map((item, index) => {
          return (
            <div key={index} className="about__location-card">
              <img src={item.img} alt={item.location} className="about__location-card-image" />
              <h5 className="about__location-card-location">{item.location}</h5>
              <button className="about__location-card-cta-btn">See Location</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default LocationCards
