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
          <Link className="project_image" to={`/projects/${this.id}`}><img className={`index-image project-index-photo-${this.id}`} src={`${project.photoUrl}`}/></Link>
          <div className="project_details">
            <Link className="project_detail" to={`/projects/${this.id}`}>{project.title}</Link>
            <Link className="project_detail" to={`/users/${project.user_id}`}>by {project.authorUsername}</Link>
          </div>
        </li>
      </Link>
    );
  }
}

export default FeaturedProjectItem;
