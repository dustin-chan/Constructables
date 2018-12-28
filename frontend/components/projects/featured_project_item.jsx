import React from 'react';
import { Link } from 'react-router-dom';

class FeaturedProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.project.id;
  }

  render() {
    const project = this.props.project;
    return (
      <Link to={`/projects/${this.props.project.id}`} className="flex">
        <li className="project_item">
          <div className="project_image" to={`/projects/${this.id}`}><img className={`index-image project-index-photo-${this.id}`} src={`${project.photoUrl}`}/></div>
          <div className="project_details">
            <div className="project_detail" to={`/projects/${this.id}`}>{project.title}</div>
            <div className="project_detail" to={`/users/${project.user_id}`}>by {project.authorUsername}</div>
          </div>
        </li>
      </Link>
    );
  }
}

export default FeaturedProjectItem;
