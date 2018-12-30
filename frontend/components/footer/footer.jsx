import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="featured_projects" id="gbl-footer">
      <a href="https://github.com/dustin-chan">
        <img src={ window.github_icon } className="github-link"/>
      </a>

      <a href="https://www.linkedin.com/in/dustin-chan-47bb1616b/">
        <img src={ window.linkedin_icon } className="in-link"/>
      </a>
    </footer>
  );
};

export default Footer;
