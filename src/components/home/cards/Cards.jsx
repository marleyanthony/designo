import React from 'react';
import webDesign from '../../../assets/home/mobile/image-web-design.jpg';
import appDesign from '../../../assets/home/mobile/image-app-design.jpg';
import graphicDesign from '../../../assets/home/mobile/image-graphic-design.jpg';
import rightArrow from '../../../assets/shared/desktop/icon-right-arrow.svg';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className="main__project-cards">
      <div className="main__card-wrapper">
        <Link to="/web-design">
          <img src={webDesign} alt="web design" className="main__card-img" />
        </Link>
        <h4 className="main__card-lead-text">Web Design</h4>
        <div className="main__card-sub-text-wrapper">
          <p className="main__card-sub-text">View Projects</p>
          <img src={rightArrow} alt="right arrow" className="main__right-arrow" />
        </div>
      </div>

      <div className="main__app-graphic-wrapper">
        <div className="main__card-wrapper">
          <img src={appDesign} alt="web design" className="main__card-img" />
          <h4 className="main__card-lead-text">App Design</h4>
          <div className="main__card-sub-text-wrapper">
            <p className="main__card-sub-text">View Projects</p>
            <img src={rightArrow} alt="right arrow" className="main__right-arrow" />
          </div>
        </div>

        <div className="main__card-wrapper">
          <img src={graphicDesign} alt="graphic design" className="main__card-img" />
          <h4 className="main__card-lead-text main__card-lead-text--graphic-design">Graphic Design</h4>
          <div className="main__card-sub-text-wrapper">
            <p className="main__card-sub-text">View Projects</p>
            <img src={rightArrow} alt="right arrow" className="main__right-arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
