import React from 'react';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.requestProject(this.props.match.params.projectId);
  }

  render() {
    debugger
    const { project } = this.props;
    const { title, description, user_id: userId, authorUsername, steps } = project;

    return (
      <div>
        <ul>
          <li>{title}</li>
          <li>{description}</li>
          <li>{userId}</li>
          <li>{authorUsername}</li>
          <li>{steps}</li>
        </ul>
      </div>
    );
  }
}

export default ProjectShow;
