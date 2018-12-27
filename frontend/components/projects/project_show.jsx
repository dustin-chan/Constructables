import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import CreateCommentFormContainer from '../comments/create_comment_form_container';
import CommentContainer from '../comments/comment_container';


class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comments || '';

    this.deleteProject = this.props.deleteProject.bind(this);
    this.requestProject = this.props.requestProject.bind(this);
  }

  componentDidMount() {
    this.requestProject(this.props.match.params.projectId);
  }

  render() {
    if ( !this.props.project ) {
      return <div/>;
    }

    const { project, steps, comments } = this.props;
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
    if ( steps ) {
      stepsJsx = steps.map((step, idx) => {
        if ( step.photoUrl ) {
          return (
            <div className="project-show-div" key={`step-${idx}`}>
              <img key={`step-div-${idx}`} src ={`${step.photoUrl}`} className={`step-parallax-show project-photo-${step.id}`} />
              <li key={`step-li-${idx}`} className="step-quill" dangerouslySetInnerHTML={{__html: step.body}}/>
            </div>
          );
        }
      });
    } else {
      stepsJsx = '';
    }

    let commentsJsx;
    if ( comments ) {
      debugger
      commentsJsx = comments.map((comment, idx) => {
        return (
          <div key={`comment-${idx}`}>
            <CommentContainer comment={ comment } />
          </div>
        );
      });
    } else {
      commentsJsx = '';
    }

    return (
      <div className="project-show">
        <ul className="project-show-ul">
          <div className={`parallax-show project-photo-${ project.id }`}><img className="parallax-show-img" src={`${this.props.project.photoUrl}`}/></div>
          <li className="project-title">{ title }</li>
          <li className="project-quill" dangerouslySetInnerHTML={{ __html: description }}></li>
          { stepsJsx }
        </ul>

        { protectedButtons }
        <br/>
        <ul>
        { commentsJsx }
        </ul>
        <br/>
        <CreateCommentFormContainer projectId={ project.id } />
      </div>
    );
  }
}

export default ProjectShow;
