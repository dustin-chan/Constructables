import React from 'react';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestProject(this.props.match.params.projectId);
  }

  componentDidUpdate(oldProps) {
    const projectParallaxDiv = $(`.project-photo-${this.props.project.id}`);
    projectParallaxDiv.parallax({imageSrc: `${this.props.project.photoUrl}`, speed: .3});

    if (this.props.steps[0]) {  
      this.props.steps.map(step => {
        const stepParallaxDiv = $(`.project-photo-${step.id}`);
        stepParallaxDiv.parallax({imageSrc: `${step.photoUrl}`, speed: .75});
      });
    }

    window.scrollTo(0, 0);
  }

  render() {
    //
    if (!this.props.project) {
      return <div/>;
    }

    const { project, steps } = this.props;
    const { title, description, user_id: userId, authorUsername, photoUrl } = project;
    let stepsJsx;
    if (steps[0]) {
      debugger
      stepsJsx = steps.map((step, idx) => (
        <div className="project-show-div">
        <div key={`step-div-${idx}`} className={`step-parallax-show project-photo-${step.id}`} />
          <li key={`step-li-${idx}`} className="step-quill" dangerouslySetInnerHTML={{__html: step.body}}/>
        </div>
      ));
    } else {
      stepsJsx = '';
    }
    return (
      <div className="project-show">
        <ul className="project-show-ul">
          <div className={`parallax-show project-photo-${project.id}`} />
          <li className="project-title">{title}</li>
          <li className="project-quill" dangerouslySetInnerHTML={{__html: description}}></li>
          {stepsJsx}
        </ul>
      </div>
    );
  }
}

export default ProjectShow;
