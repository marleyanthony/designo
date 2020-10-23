import React from 'react';
import GlobalHero from '../global-components/hero/Hero';

class AppDesign extends React.Component {
  state = {
    heading: 'App Design',
    subHeading: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
  }

  render() {
    return (
      <div>
        <GlobalHero heading={this.state.heading} subHeading={this.state.subHeading} />
      </div>
    )
  }
}

export default AppDesign
