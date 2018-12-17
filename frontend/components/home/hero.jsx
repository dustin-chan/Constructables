import React from 'react';

class Hero extends React.Component {
  componentDidMount() {
    // $('.hero').parallax({imageSrc: `${window.craft_leaves}`});
  }

  render() {
    return (
        <div className="hero"><img className="hero" src={`${window.craft_leaves}`}/></div>
    );
  }
};

export default Hero;
