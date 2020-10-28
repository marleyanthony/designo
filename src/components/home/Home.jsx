import React from 'react';
import Hero from './hero/Hero';
import DesignCards from '../global-components/design-cards/DesignCards';
import Us from './us/Us';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <DesignCards />
      <Us />
      <Footer />
    </main>
  )
}

export default Home