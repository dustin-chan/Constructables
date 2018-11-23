import React from 'react';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestProject(this.props.match.params.projectId);
  }

  componentDidUpdate() {
    const parallaxDiv = $(`.project-photo-${this.props.project.id}`);
    parallaxDiv.parallax({imageSrc: `${this.props.project.photoUrl}`, speed: .5});
  }

  render() {
    // debugger
    if (!this.props.project) {
      return <div/>;
    }

    const { project, steps } = this.props;
    const { title, description, user_id: userId, authorUsername, photoUrl } = project;
    let stepsJsx;
    if (steps) {
      const vals = Object.values(steps);
      stepsJsx = vals.map((val, idx) => <li key={idx} dangerouslySetInnerHTML={{__html: val}}/>);
    } else {
      stepsJsx = '';
    }
    return (
      <div className="project-show">
        <ul>
        <div className={`parallax-show project-photo-${project.id}`} />
        <li>{title}</li>
        <li dangerouslySetInnerHTML={{__html: description}}></li>
        <li>{authorUsername}</li>
        {stepsJsx}
        </ul>
      </div>
    );
  }
}

export default ProjectShow;
