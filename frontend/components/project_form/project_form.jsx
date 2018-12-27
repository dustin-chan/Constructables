import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactQuill from 'react-quill';
import StepForm from '../step_form/step_form';


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.project;
    this.quillUpdate = this.quillUpdate.bind(this);
    this.fileUpdate = this.fileUpdate.bind(this);
    this.addStep = this.addStep.bind(this);
    this.stepUpdate = this.stepUpdate.bind(this);
    this.stepFileUpdate = this.stepFileUpdate.bind(this);
    this.removeStep = this.removeStep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  defaultStep() {
    return {photoUrl: '', photoFile: null, body: ''};
  }

  componentDidMount() {
    if ( this.props.formType === 'edit' ) {
      this.props.requestProject(this.props.match.params.projectId);
    }
  }

  componentDidUpdate(prevProps) {
    if ( prevProps.project != this.props.project ) {
      this.setState({
        title: this.props.project.title,
        photoUrl: this.props.project.photoUrl,
        featured: this.props.project.featured,
        category: this.props.project.category,
        description: this.props.project.description,
        stepsAttributes: this.props.project.stepsAttributes
      });
    }
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
    formData.append('project[featured]', this.state.featured);
    formData.append('project[category]', this.state.category);
    formData.append('project[description]', this.state.description);
    this.state.stepsAttributes.forEach(step => {
      formData.append('project[steps_attributes][][body]', step.body);
      if (step.photoFile) {
        formData.append('project[steps_attributes][][photo]', step.photoFile);
      } else if (step.photoUrl) {
        formData.append('project[steps_attributes][][photo_url]', step.photoUrl);
      }
    });

    if (this.state.photoFile) {
      formData.append('project[photo]', this.state.photoFile);
    }

    let data;
    if ( this.props.formType === 'edit' ) data = { formData: formData, id: this.props.project.id };

    else data = formData;

    this.props.processForm(data).then(res => this.props.history.push(`/projects/${res.project.id}`));
  }

  addStep() {
    this.setState({stepsAttributes: this.state.stepsAttributes.concat([this.defaultStep()])});
  }

  stepUpdate(idx) {
    return (value, delta, source, editor) => {
      const step = this.state.stepsAttributes[idx];
      step.body = value;
      this.setState({stepsAttributes: this.state.stepsAttributes});
    };
  }

  stepFileUpdate(idx) {
    return (e) => {
      const step = this.state.stepsAttributes[idx];
      const reader = new FileReader();
      const file = e.currentTarget.files[0];
      reader.onloadend = () => {
        step.photoUrl = reader.result;
        step.photoFile = file;
        this.setState({stepsAttributes: this.state.stepsAttributes});
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        step.photoUrl = "";
        step.photoFile = file;
        this.setState({stepsAttributes: this.state.stepsAttributes});
      }
    };
  }

  removeStep(idx) {
    const steps = this.state.stepsAttributes;
    const newStepsAttributes = steps.slice(0, idx)
      .concat(steps.slice(idx + 1, steps.length));
    this.setState({stepsAttributes: newStepsAttributes});
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
         {'indent': '-1'}, {'indent': '+1'}],
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
      "direction",
      "image",
      "video"
    ];

    const steps = this.state.stepsAttributes.map((step, idx) => {
      return (
        <StepForm
        key={idx}
        idx={idx}
        step={step}
        stepUpdate={this.stepUpdate}
        stepFileUpdate={this.stepFileUpdate}
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
            <div className="project-image">
              <img src={this.state.photoUrl} />
              <input type="file" onChange={this.fileUpdate}/>
            </div>
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

export default ProjectForm;
