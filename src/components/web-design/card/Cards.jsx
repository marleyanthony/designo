import React from 'react';
import webDesignCardsInfo from './cardInfo';
import AppDesignCard from '../../global-components/design-cards/AppDesignCard';
import GraphicDesignCard from '../../global-components/design-cards/GraphicDesignCard';

const Cards = () => {
  return (
    <>
      <div className="cards">
        {
          webDesignCardsInfo.map((item, index) => {
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
      <div className="cards__design-cards">
        <AppDesignCard />
        <GraphicDesignCard />
      </div>
    </>
  )
}

export default Cards
