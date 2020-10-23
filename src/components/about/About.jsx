import React from 'react';
import aboutHeroImage from '../../assets/about/mobile/image-about-hero.jpg';
import GlobalHero from '../global-components/hero/Hero';
import aboutUsImage from '../../assets/about/mobile/image-world-class-talent.jpg';
import LocationCards from '../global-components/location-cards/LocationCards';
import realDealImage from '../../assets/about/mobile/image-real-deal.jpg';
import AboutText from '../global-components/about-text/AboutText';

class About extends React.Component {
  state = {
    heroHeading: 'About Us',
    heroSubHeading: 'Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.',

    worldClassHeading: 'World-class talent',
    worldClassFirstParagraph: 'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
    worldClassSecondParagraph: 'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',

    realDealHeading: 'The real deal',
    realDealFirstParagraph: 'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity.We make design and technology more accessible and give you tools to measure success.',
    realDealSecondParagraph: 'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'
  }

  render() {
    return (
      <div className="about">
        <img src={aboutHeroImage} alt="About Us" className="about__hero-img" />
        <GlobalHero heading={this.state.heroHeading} subHeading={this.state.heroSubHeading} />
        <img src={aboutUsImage} alt="About Us" className="about__about-us-img" />
        <AboutText
          heading={this.state.worldClassHeading}
          firstParagraph={this.state.worldClassFirstParagraph}
          secondParagraph={this.state.worldClassSecondParagraph}
        />
        <div className="about__locations-wrapper">
          <LocationCards />
        </div>
        <div className="about__the-real-deal">
          <img src={realDealImage} alt="Real Deal" className="about__the-real-deal-image" />
          <AboutText
            heading={this.state.realDealHeading}
            firstParagraph={this.state.realDealFirstParagraph}
            secondParagraph={this.state.realDealSecondParagraph}
          />
        </div>
      </div>
    )
  }
}

export default About
