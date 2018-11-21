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

// class FeaturedProjectItem extends React.component {
//   constructor(props) {
//     super(props);
//   }
//
//   componentDidMount() {
//     $('.project_image').parallax({imageSrc: `${window.fish_mobiles}`});
//   }
//
//   render() {
//     const project = this.props.project;
//     return (
//       <li className="featured_project_item">
//         <Link className="project_image" to={`/projects/${project.id}`}><img></img></Link>
//         <div className="project_details">
//           <Link className="project_detail" to={`/projects/${project.id}`}>{project.title}</Link>
//           <Link className="project_detail" to={`/users/${project.user_id}`}>{project.authorUsername}</Link>
//           <Link className="project_detail" to={`/users/${project.user_id}`}>{project.category}</Link>
//         </div>
//       </li>
//     )
//   }
// }

export default FeaturedProjectItem;
