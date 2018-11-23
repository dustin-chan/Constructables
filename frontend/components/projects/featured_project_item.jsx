import React from 'react';
import { Link } from 'react-router-dom';

class FeaturedProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.project.id;
  }

  componentDidMount() {

    const parallaxDiv = $(`.project-index-photo-${this.id}`);
    parallaxDiv.parallax({imageSrc: `${this.props.project.photoUrl}`, speed: Math.random()});
    debugger
  }

  componentDidUpdate() {
  }

  render() {
    const project = this.props.project;
    return (
      <li className="featured_project_item">
        <Link className="project_image" to={`/projects/${this.id}`}><div className={`index-image project-index-photo-${this.id}`}/></Link>
        <div className="project_details">
          <Link className="project_detail" to={`/projects/${this.id}`}>{project.title}</Link>
          <Link className="project_detail" to={`/users/${project.user_id}`}>{project.authorUsername}</Link>
          <Link className="project_detail" to={`/users/${project.user_id}`}>{project.category}</Link>
        </div>
      </li>
    );
  }
}

export default FeaturedProjectItem;
