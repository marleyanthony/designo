import React from 'react';
import Hero from './hero/Hero';
import Cards from './cards/Cards';
import Us from './us/Us';

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Cards />
      <Us />
    </main>
  )
}

export default Home