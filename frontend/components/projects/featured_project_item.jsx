import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProjectItem = ({ project }) => {
  return (<li>
    <Link to={`/projects/${project.id}`}><img></img></Link>
    <Link to={`/projects/${project.id}`}>{project.title}</Link>
    <Link to={`/users/${project.user_id}`}>{project.authorUsername}</Link>
    <Link to={`/users/${project.user_id}`}>{project.category}</Link>
  </li>)
}

export default FeaturedProjectItem;
