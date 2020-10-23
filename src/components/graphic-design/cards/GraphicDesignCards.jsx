import React from 'react';
import graphicDesignCardsInfo from './graphicDesignCardsInfo';

const GraphicDesignCards = () => {
  return (
    <div className="cards">
      {
        graphicDesignCardsInfo.map((item, index) => {
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

export default GraphicDesignCards
