import React from 'react';
import GlobalHero from '../global-components/hero/Hero';
import AppDesignCards from './cards/AppDesignCards';
import WebDesignCard from '../global-components/design-cards/WebDesignCard';
import GraphicDesignCard from '../global-components/design-cards/GraphicDesignCard';

class AppDesign extends React.Component {
  state = {
    heading: 'App Design',
    subHeading: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
  }

  render() {
    return (
      <div className="app-design">
        <GlobalHero heading={this.state.heading} subHeading={this.state.subHeading} />
        <AppDesignCards />
        <WebDesignCard />
        <GraphicDesignCard />
      </div>
    )
  }
}

export default AppDesign
