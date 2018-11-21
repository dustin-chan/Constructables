import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactQuill from 'react-quill';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', category: '', description: '', steps_attributes: []};
    this.defaultStep = "defaultStep";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addStep = this.addStep.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, this.state);
    this.props.processForm(project).then(res => this.props.history.push(`/projects/${res.project.id}`));
  }

  addStep() {
    this.state.steps_attributes += this.defaultStep;
    // HOW TO CAUSE RE-RENDER?
  }

  renderErrors() {
    // return(
    //   <ul>
    //     {this.props.errors.map((error, i) => (
    //       <li className="auth_error" key={`error-${i}`}>{error}</li>
    //     ))}
    //   </ul>
    // );
  }

  render() {

    const quillModules = {
            toolbar: [
              [{ 'header': '1'}, {'header': '2'}, {'font': []}],
        [{size: []}],
        ['background', 'color', 'bold', 'italic',
        'underline', 'strike', 'script'],
        [{'list': 'ordered'}, {'list': 'bullet'},
         {'indent': '-1'}, {'indent': '+1'}, {'align': []}],
        ['link', 'image', 'video'],
        ['clean']
      ],
    }

    const quillFormats = [
      "background",
      "bold",
      "color",
      "font",
      "italic",
      "link",
      "size",
      "strike",
      "script",
      "underline",
      "header",
      "indent",
      "list",
      "align",
      "direction",
      "image",
      "video"
    ];

    const email = (
      <div>
        <input
          className="input-large"
          placeholder="Email"
          type="text"
          value={this.state.email}
          onChange={this.update('email')}
          />
        <br/>
      </div>
    );

    // const steps = this.state.steps_attributes.map();

    return (
      <div id="project-form-wrapper">
        <form className="project-form" onSubmit={this.handleSubmit}>
          <br/>
          <br/>
          <label>Title
            <input
              className="input-large"
              placeholder="Title"
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
              />
          </label>
          <br/>
          <label>Introduction
            <textarea
              className="input-large"
              placeholder="Introduction"
              type="password"
              value={this.state.description}
              onChange={this.update('description')}
              />
          </label>
          <br/>
            <ReactQuill
              className="quill"
              modules={quillModules}
              formats={quillFormats}
              theme="snow"
              value={this.state.description}
              onChange={this.update('description')}
              />
          <br/>
          {this.renderErrors()}
          <br/>
          <input className="project-submit" type="submit" value={this.props.formType}/>
          <button onClick={() => addStep()}>Add Step</button>
        </form>
      </div>
    );
  }
}

export default ProjectForm;
