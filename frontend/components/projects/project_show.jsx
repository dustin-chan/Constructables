import React from 'react';
import { Redirect, Link } from 'react-router-dom';


class ProjectShow extends React.Component {
  constructor(props) {
    super(props);

    this.deleteProject = this.props.deleteProject.bind(this);
  }

  componentDidMount() {
    this.props.requestProject(this.props.match.params.projectId);
  }

  componentDidUpdate(oldProps) {
    const projectParallaxDiv = $(`.project-photo-${this.props.project.id}`);
    projectParallaxDiv.parallax({imageSrc: `${this.props.project.photoUrl}`, speed: .3});

    window.scrollTo(0, 0);
  }

  render() {
    if (!this.props.project) {
      return <div/>;
    }

    const { project, steps } = this.props;
    const { title, description, user_id: userId, authorUsername, photoUrl } = project;

    let protectedButtons;
    if ( this.props.currentUserId === userId ) {
      protectedButtons = (
        <div className="protected-project-buttons">
          <div className="project-edit-link">
            <Link to={`/projects/${project.id}/edit`}>
              Edit Project
            </Link>
          </div>
          <button className='project-delete-link' onClick={() => this.deleteProject(this.props.project.id).then(this.props.history.push('/'))}>Delete Project</button>
        </div>
      );
    } else {
      protectedButtons = '';
    }

    let stepsJsx;
    if (steps[0]) {
      stepsJsx = steps.map((step, idx) => (
        <div className="project-show-div">
          <img key={`step-div-${idx}`} src ={`${step.photoUrl}`} className={`step-parallax-show project-photo-${step.id}`} />
          <li key={`step-li-${idx}`} className="step-quill" dangerouslySetInnerHTML={{__html: step.body}}/>
        </div>
      ));
    } else {
      stepsJsx = '';
    }

    return (
      <div className="project-show">
        <ul className="project-show-ul">
          <div className={`parallax-show project-photo-${ project.id }`} />
          <li className="project-title">{ title }</li>
          <li className="project-quill" dangerouslySetInnerHTML={{ __html: description }}></li>
          { stepsJsx }
        </ul>

        { protectedButtons }
      </div>
    );
  }
}

export default ProjectShow;
