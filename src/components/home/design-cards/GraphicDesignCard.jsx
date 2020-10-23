import React from 'react';
import { Link } from 'react-router-dom';
import rightArrow from '../../../assets/shared/desktop/icon-right-arrow.svg';
import graphicDesignImage from '../../../assets/home/mobile/image-graphic-design.jpg';

const GraphicDesignCard = () => {
  return (
    <Link to="/graphic-design">
      <div className="main__card-wrapper">
        <img src={graphicDesignImage} alt="graphic design" className="main__card-img" />
        <h4 className="main__card-lead-text main__card-lead-text--graphic-design">Graphic Design</h4>
        <div className="main__card-sub-text-wrapper">
          <p className="main__card-sub-text">View Projects</p>
          <img src={rightArrow} alt="right arrow" className="main__right-arrow" />
        </div>
      </div>
    </Link>
  )
}

export default GraphicDesignCard
