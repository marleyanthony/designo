import React from 'react';
import Hero from '../global-components/hero/Hero';
import Cards from './card/Cards';
import Footer from '../footer/Footer';

class WebDesign extends React.Component {
  state = {
    heading: 'Web Design',
    subHeading: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
  }

  render() {
    return (
      <div className="web-design">
        <Hero heading={this.state.heading} subHeading={this.state.subHeading} />
        <Cards />
        <Footer />
      </div>
    )
  }
}

export default WebDesign
