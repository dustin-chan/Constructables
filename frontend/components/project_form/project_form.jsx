import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactQuill from 'react-quill';
import StepForm from '../step_form/step_form';
// import 'react-quill/dist/quill.snow.css';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.quillUpdate = this.quillUpdate.bind(this);
    this.fileUpdate = this.fileUpdate.bind(this);
    this.addStep = this.addStep.bind(this);
    this.stepUpdate = this.stepUpdate.bind(this);
    this.removeStep = this.removeStep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  defaultStep() {
    return {body: ''};
  }

  componentWillUnmount() {
    // this.props.removeErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  quillUpdate(field) {
    return value => this.setState({
      [field]: value
    });
  }
  // this.setState({description: value});
  fileUpdate(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ photoUrl: reader.result, photoFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('project[title]', this.state.title);
    if (this.state.photoFile) {
      formData.append('project[title]', this.state.photoFile);
    }
    // $.ajax({    }) ???
    const project = Object.assign({}, this.state);

    this.props.processForm(project).then(res => this.props.history.push(`/projects/${res.project.id}`));
  }

  addStep() {
    this.setState({steps_attributes: this.state.steps_attributes.concat([this.defaultStep()])});
    // HOW TO CAUSE RE-RENDER?
  }

  stepUpdate(idx) {
    return (value, delta, source, editor) => {
      const step = this.state.steps_attributes[idx];
      step.body = value;
      console.log(this.state)
      this.setState({steps_attributes: this.state.steps_attributes}, () => {
        console.log(this.state)
      });
    };
  };

  removeStep(idx) {
    const steps = this.state.steps_attributes;
    const newStepsAttributes = steps.slice(0, idx)
      .concat(steps.slice(idx + 1, steps.length));
    this.setState({steps_attributes: newStepsAttributes});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="auth_error" key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {

    const quillModules = {
      toolbar: [
        [{ 'header': []}],
        [{size: []}],
        [{'background': []}, {'color': []}],
        ['bold', 'italic',
        'underline', 'strike', {'script': 'sub'}, {'script': 'super'}],
        [{'list': 'ordered'}, {'list': 'bullet'},
         {'indent': '-1'}, {'indent': '+1'}, {'align': []}],
        ['link', 'image', 'video'],
        ['clean']
      ],
    };

    const quillFormats = [
      "background",
      "bold",
      "color",
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

    const steps = this.state.steps_attributes.map((step, idx) => {
      return (
        <StepForm
          key={idx}
          idx={idx}
          step={step}
          stepUpdate={this.stepUpdate}
          removeStep={this.removeStep}
          quillModules={quillModules}
          quillFormats={quillFormats}
          />
      );
    });

    return (
      <div className="form-container">
        <form className="project-form" onSubmit={this.handleSubmit}>
          <br/>
          <div className="project-image">
            <img src={this.state.photoUrl} />
            <input type="file" onChange={this.fileUpdate}/>
          </div>
          <br/>
          <label>{this.state.title}
            <input
              className="input-large"
              placeholder="Title"
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
              />
          </label>
          <br/>
          <br/>
          <div className="quill-form-intro">Introduction
            <ReactQuill
              className="quill"
              modules={quillModules}
              formats={quillFormats}
              theme="snow"
              value={this.state.description}
              onChange={this.quillUpdate('description')}
              />
          </div>
          <br/>
          {this.renderErrors()}
          <br/>
          {steps}
          <br/>
          <div className="project-buttons">
            <button type="button" onClick={this.addStep}>Add Step</button>
            <input className="project-submit" type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

//

export default ProjectForm;
