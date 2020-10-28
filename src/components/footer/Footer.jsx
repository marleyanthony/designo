import React from 'react';
import GetInTouch from '../footer/GetInTouch';
import logoLight from '../../assets/shared/desktop/logo-light.png';
import facebook from '../../assets/shared/desktop/icon-facebook.svg';
import youtube from '../../assets/shared/desktop/icon-youtube.svg';
import pinterest from '../../assets/shared/desktop/icon-pinterest.svg';
import twitter from '../../assets/shared/desktop/icon-twitter.svg';
import instagram from '../../assets/shared/desktop/icon-instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <GetInTouch />
      <div className="footer__top">
        <div className="footer__logo-wrapper">
          <img src={logoLight} alt="logo" className="footer__logo" />
          <hr className="footer__hr" />
        </div>
        <div className="footer__nav-wrapper">
          <Link to="/about" className="footer__nav-item">
            <h5 className="footer__nav-item-text">Our Company</h5>
          </Link>
          <Link to="/locations" className="footer__nav-item">
            <h5 className="footer__nav-item-text">Locations</h5>
          </Link>
          <Link to="/contact" className="footer__nav-item">
            <h5 className="footer__nav-item-text">Contact</h5>
          </Link>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__office">
          <h5 className="footer__bottom-heading">Designo Central Office</h5>
          <p className="footer__bottom-sub-text">3886 Wellington Street</p>
          <p className="footer__bottom-sub-text">Toronto, Ontario M9C 3J5</p>
        </div>
        <div className="footer__contact">
          <h5 className="footer__bottom-heading">Contact Us (Central Office)</h5>
          <p className="footer__bottom-sub-text">P : +1 253-863-8967</p>
          <p className="footer__bottom-sub-text">M : contact@designo.co</p>
        </div>
        <div className="footer__social">
          <img src={facebook} alt="facebook" className="footer__social-icon" />
          <img src={youtube} alt="youtube" className="footer__social-icon" />
          <img src={twitter} alt="twitter" className="footer__social-icon" />
          <img src={pinterest} alt="pinterest" className="footer__social-icon" />
          <img src={instagram} alt="instagram" className="footer__social-icon footer__social-icon--last" />
        </div>
      </div>
    </div>
  )
}

export default Footer
