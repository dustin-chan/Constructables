import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import CreateCommentFormContainer from '../comments/create_comment_form_container';


class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: this.props.project, count: 0};

    this.deleteProject = this.props.deleteProject.bind(this);
    this.requestProject = this.props.requestProject.bind(this);
  }

  componentWillMount() {
    // this.requestProject(this.props.match.params.projectId);
  }

  componentDidMount() {
    this.requestProject(this.props.match.params.projectId).then(project => this.setState({project: project}));
    // setTimeout(this.setState({ loaded: true }), 3500);
  }

  componentDidUpdate(oldProps) {
    // if ( oldProps.steps != this.props.steps && this.state.count < 5 ) {
    //   this.requestProject(this.props.match.params.projectId);
    //   this.state.count += 1
    // }
    // const projectParallaxDiv = $(`.project-photo-${this.props.project.id}`);
    // projectParallaxDiv.parallax({imageSrc: `${this.props.project.photoUrl}`, speed: .3});

    window.scrollTo(0, 0);
  }

  editComment(id) {
    return e => {
      this.setState({
        [id]: { editing: true }
      });
    }
  }

  render() {
    if (!this.props.project && !this.props.steps[0] && !this.props.steps[this.props.steps.length - 1]) {
      this.requestProject(this.props.match.params.projectId);
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
    if ( this.props.steps[this.props.steps.length - 1] && this.props.steps[0] && this.props.steps[Math.floor(this.props.steps.length / 2)] ) {
      stepsJsx = steps.map((step, idx) => {
        if ( step.photoUrl ) {
          return (
            <div className="project-show-div">
              <img key={`step-div-${idx}`} src ={`${step.photoUrl}`} className={`step-parallax-show project-photo-${step.id}`} />
              <li key={`step-li-${idx}`} className="step-quill" dangerouslySetInnerHTML={{__html: step.body}}/>
            </div>
          );
        }
      });
    } else {
      stepsJsx = '';
    }

    // let commentsJsx;
    // if ( comments ) {
    //
    //   let commentEdit;
    //
    //   commentsJsx = comments.map((comment, idx) => {
    //     if ( this.props.currentUserId === comment.authorId ) {
    //       commentEdit = (
    //         <button onClick={(id) => editComment(id)}>Edit Comment</button>
    //       );
    //     } else {
    //       commentEdit = '';
    //     }
    //
    //     return (
    //       <div className="comments-container">
    //       <li key={`comment-body-${comment.id}`} className="comment">{comment.body}</li>
    //       <li key={`comment-username=${comment.id}`} className="comment-username">{comment.authorUsername}</li>
    //       {commentEdit}
    //       </div>
    //     );
    //   });
    // } else {
    //   commentsJsx= '';
    // }
    //
    // { commentsJsx }
    // <CreateCommentFormContainer projectId={ project.id }/>

    return (
      <div className="project-show">
        <ul className="project-show-ul">
          <div className={`parallax-show project-photo-${ project.id }`}><img className="parallax-show-img" src={`${this.props.project.photoUrl}`}/></div>
          <li className="project-title">{ title }</li>
          <li className="project-quill" dangerouslySetInnerHTML={{ __html: description }}></li>
          { stepsJsx }
        </ul>

        { protectedButtons }
        <ul>
        </ul>
      </div>
    );
  }
}

export default ProjectShow;
