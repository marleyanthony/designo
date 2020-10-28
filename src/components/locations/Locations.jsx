import React from 'react';
import locationsInfo from './locationsInfo';
import Footer from '../footer/Footer';

const Locations = () => {
  return (
    <div className="locations">
      {
        locationsInfo.map((item, index) => {
          return (
            <div key={index} className="locations__card-wrapper">
              <img src={item.map} alt={item.country} className="location__map" />
              <div className="locations__contact-info-wrapper">
                <h5 className="locations__country">{item.country}</h5>
                <div className="locations__office-wrapper">
                  <h5 className="locations__office-header">{item.office}</h5>
                  <p className="locations__office-address">{item.address}</p>
                  <p className="locations__office-city">{item.city}</p>
                </div>
                <div className="locations__contact-wrapper">
                  <h5 className="locations__contact-header">Contact</h5>
                  <p className="locations__phone">{item.phone}</p>
                  <p className="locations__email">{item.email}</p>
                </div>
              </div>
            </div>
          )
        })
      }
      <Footer />
    </div>
  )
}

export default Locations
