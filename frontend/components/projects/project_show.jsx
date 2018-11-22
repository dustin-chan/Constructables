import React from 'react';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.requestProject(this.props.match.params.projectId);
  }

  render() {

    if (!this.props.project) {
      return <div/>;
    }

    const { project, steps } = this.props;
    const { title, description, user_id: userId, authorUsername } = project;
    let stepsJsx;
    if (steps) {
      const vals = Object.values(steps);
      stepsJsx = vals.map(val => <li dangerouslySetInnerHTML={{__html: val.htmlSafe}}/>);
    } else {
      stepsJsx = '';
    }
    return (
      <div className="project-show">
        <ul>
          <li>{title}</li>
          <li>{description}</li>
          <li>{authorUsername}</li>
          {stepsJsx}
        </ul>
      </div>
    );
  }
}

export default ProjectShow;
