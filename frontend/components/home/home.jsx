import React from 'react';
import Hero from './hero';
import Projects from './projects';

const Home = () => {
  return (
    <div className="parallax_group">
      <Hero />
      <Projects />
    </div>
  );
};

export default Home;
