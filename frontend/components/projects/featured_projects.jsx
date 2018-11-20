import React from 'react';
import FeaturedProjectItem from './featured_project_item';

class FeaturedProjects extends React.Component {
  componentDidMount() {
    this.props.requestProjects();
  }

  render() {

    const projects = this.props.projects.map(project => {
      return <FeaturedProjectItem key={project.id} project={project} />;
    });
    return (
      <div>
        <h3 className="section_title">Featured</h3>
        <ul className="featured_projects">
          {projects}
        </ul>
      </div>
    );
  }
}

export default FeaturedProjects;
