import React from 'react';
import WebDesignCard from './WebDesignCard';
import AppDesignCard from './AppDesignCard';
import GraphicDesignCard from './GraphicDesignCard';

const DesignCards = () => {
  return (
    <div className="main__project-cards">
      <WebDesignCard />

      <div className="main__app-graphic-wrapper">
        <AppDesignCard />
        <GraphicDesignCard />
      </div>

    </div>
  )
}

export default DesignCards
