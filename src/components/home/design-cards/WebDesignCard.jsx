import React from 'react';
import { Link } from 'react-router-dom';
import rightArrow from '../../../assets/shared/desktop/icon-right-arrow.svg';
import webDesginImage from '../../../assets/home/mobile/image-web-design.jpg'


const WebDesignCard = () => {
  return (
    <Link to="/web-design">
      <div className="main__card-wrapper">
        <img src={webDesginImage} alt="web design" className="main__card-img" />
        <h4 className="main__card-lead-text">Web Design</h4>
        <div className="main__card-sub-text-wrapper">
          <p className="main__card-sub-text">View Projects</p>
          <img src={rightArrow} alt="right arrow" className="main__right-arrow" />
        </div>
      </div>
    </Link>
  )
}

export default WebDesignCard
