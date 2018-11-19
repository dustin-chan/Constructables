import React from 'react';
import FeaturedProjectItem from './featured_project_item';

class FeaturedProjects extends React.Component {
  componentDidMount() {
    this.props.requestProjects();
  }

  render() {

    const projects = this.props.projects.map(project => {
      return <FeaturedProjectItem project={project} />;
    });
    return (
      <ul>
        {projects}
      </ul>
    );
  }
}

export default FeaturedProjects;
