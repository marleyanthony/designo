import React from 'react';
import Hero from './hero/Hero';
import DesignCards from './design-cards/DesignCards';
import Us from './us/Us';

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <DesignCards />
      <Us />
    </main>
  )
}

export default Home