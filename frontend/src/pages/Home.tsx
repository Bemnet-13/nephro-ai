import React from 'react';
import Hero from '../components/Hero';
import { Features } from '../components/Features';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main className="py-12 md:py-20">
        <Features />
      </main>
    </div>
  );
};

export default Home;