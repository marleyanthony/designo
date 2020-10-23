import React from 'react';
import appDesignCardInfo from './appDesignCardInfo';

const AppDesignCards = () => {
  return (
    <div className="cards">
      {
        appDesignCardInfo.map((item, index) => {
          return (
            <div key={index} className="cards__wrapper">
              <img src={item.img} alt={item.heading} className="cards__img" />
              <h1 className="cards__heading">{item.heading}</h1>
              <p className="cards__subtext">{item.subText}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default AppDesignCards
