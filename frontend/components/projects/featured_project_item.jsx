import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProjectItem = ({ project }) => {
  return (
    <li className="featured_project_item">
      <Link className="project_image" to={`/projects/${project.id}`}><img></img></Link>
      <div className="project_details">
        <Link className="project_detail" to={`/projects/${project.id}`}>{project.title}</Link>
        <Link className="project_detail" to={`/users/${project.user_id}`}>{project.authorUsername}</Link>
        <Link className="project_detail" to={`/users/${project.user_id}`}>{project.category}</Link>
      </div>
    </li>
  )
}

export default FeaturedProjectItem;
