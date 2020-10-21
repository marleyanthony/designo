import React from 'react';
import hamburger from '../../assets/shared/mobile/hamburger.svg';
import logoDark from '../../assets/shared/desktop/logo-dark.png';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__logo-wrapper">
        <img src={logoDark} alt="logo" className="nav__logo" />
      </div>
      <div className="nav__link-wrapper">
        <img src={hamburger} alt="hamburger icon" />
      </div>
    </nav>
  )
}

export default Nav