import React from 'react';
import LocationCards from '../global-components/location-cards/LocationCards';
import GetInTouchFooter from '../footer/GetInTouchFooter';

const Contact = () => {
  return (
    <>
      <div className="get-in-touch">
        <h5 className="get-in-touch__heading">Contact Us</h5>
        <h5 className="get-in-touch__sub-heading">
          Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
      </h5>
        <div className="get-in-touch__form">
          <input type="text" className="get-in-touch__input" placeholder="Name" />
          <input type="email" className="get-in-touch__input" placeholder="Email Address" />
          <input type="phone" className="get-in-touch__input" placeholder="Phone" />
          <textarea className="get-in-touch__input get-in-touch__input--textarea" placeholder="Your Message" />
          <button className="get-in-touch__submit-btn">Submit</button>
        </div>
        <LocationCards />
      </div>
      <GetInTouchFooter />
    </>
  )
}

export default Contact
