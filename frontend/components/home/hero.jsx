import React from 'react';

class Hero extends React.Component {

  render() {
    return (
        <div className="hero"><img className="parallax-show-img" src={`${window.craft_leaves}`}/></div>
    );
  }
};

export default Hero;
