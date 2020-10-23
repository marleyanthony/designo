import React from 'react';
import GlobalHero from '../global-components/hero/Hero';

class GraphicDesign extends React.Component {
  state = {
    heading: 'Graphic Design',
    subHeading: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.'
  }

  render() {
    return (
      <div>
        <GlobalHero heading={this.state.heading} subHeading={this.state.subHeading} />
      </div>
    )
  }
}

export default GraphicDesign
