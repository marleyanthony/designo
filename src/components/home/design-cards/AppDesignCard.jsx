import React from 'react';
import { Link } from 'react-router-dom';
import rightArrow from '../../../assets/shared/desktop/icon-right-arrow.svg';
import appDesignImage from '../../../assets/home/mobile/image-app-design.jpg';

const AppDesignCard = () => {
  return (
    <Link to="/app-design">
      <div className="main__card-wrapper">
        <img src={appDesignImage} alt="web design" className="main__card-img" />
        <h4 className="main__card-lead-text">App Design</h4>
        <div className="main__card-sub-text-wrapper">
          <p className="main__card-sub-text">View Projects</p>
          <img src={rightArrow} alt="right arrow" className="main__right-arrow" />
        </div>
      </div>
    </Link>
  )
}

export default AppDesignCard
