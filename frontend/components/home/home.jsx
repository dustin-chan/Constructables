import React from 'react';
import Hero from './hero';
import FeaturedProjectsContainer from '../projects/featured_projects_container';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="featured_projects">
        <FeaturedProjectsContainer />
      </div>
    </div>
  );
};

export default Home;
