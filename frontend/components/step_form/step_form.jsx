import React from 'react';
import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    // this.props.removeErrors();
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
    const { idx, step, stepUpdate, stepFileUpdate, removeStep, quillModules, quillFormats } = this.props;

    return (
      <div className="quill-form-step">Step {idx + 1}
        <div className="step-image">
          <img src={step.photoUrl} />
          <input type="file" onChange={stepFileUpdate(idx)}/>
        </div>
        <ReactQuill
          className="quill"
          modules={quillModules}
          formats={quillFormats}
          theme="snow"
          value={step.body}
          onChange={stepUpdate(idx)}
          />
        <button type="button" onClick={() => removeStep(idx)}>Remove Step {idx + 1}</button>
      </div>
    );
  }
}

// <StepForm stepChange={this.stepChange(idx) } idx={stepIdx}/>

export default StepForm;
