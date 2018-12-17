import React from 'react';
import FeaturedProjectItem from './featured_project_item';

class FeaturedProjects extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // sessionStorage.set() STORE IN SESSION NOT LOCALLY
    this.props.requestProjects();
    // this.props.requestProject(41);
    // this.props.requestProject(42);
    // this.props.requestProject(43);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
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
