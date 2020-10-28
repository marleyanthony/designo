import React from 'react';
import GlobalHero from '../global-components/hero/Hero';
import AppDesignCard from '../global-components/design-cards/AppDesignCard';
import WebDesignCard from '../global-components/design-cards/WebDesignCard';
import GraphicDesignCards from '../graphic-design/cards/GraphicDesignCards';
import Footer from '../footer/Footer';

class GraphicDesign extends React.Component {
  state = {
    heading: 'Graphic Design',
    subHeading: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.'
  }

  render() {
    return (
      <div>
        <GlobalHero heading={this.state.heading} subHeading={this.state.subHeading} />
        <GraphicDesignCards />
        <AppDesignCard />
        <WebDesignCard />
        <Footer />
      </div>
    )
  }
}

export default GraphicDesign
