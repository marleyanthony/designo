import React from 'react';
import passionateImg from '../../../assets/home/desktop/illustration-passionate.svg';
import resourcefulImg from '../../../assets/home/desktop/illustration-resourceful.svg';
import friendlyImg from '../../../assets/home/desktop/illustration-friendly.svg';

const Us = () => {
  return (
    <div className="us">
      <div className="us__trait-wrapper">
        <img src={passionateImg} alt="passionate" className="us__trait-img" />
        <div className="us__trait-text-wrapper">
          <h4 className="us__trait-header">Passionate</h4>
          <p className="us__trait-sub-text">
            Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design and technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div className="us__trait-wrapper">
        <img src={resourcefulImg} alt="resourceful" className="us__trait-img" />
        <div className="us__trait-text-wrapper">
          <h4 className="us__trait-header">Resourceful</h4>
          <p className="us__trait-sub-text">
            Everything that we do has a strategic purpose. We us an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.
          </p>
        </div>
      </div>
      <div className="us__trait-wrapper us__trait-wrapper--final-wrapper">
        <img src={friendlyImg} alt="friendly" className="us__trait-img" />
        <div className="us__trait-text-wrapper">
          <h4 className="us__trait-header">Friendly</h4>
          <p className="us__trait-sub-text">
            We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Us
