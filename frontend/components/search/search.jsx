import React from 'react';
import StepForm from '../step_form/step_form';
// import 'react-quill/dist/quill.snow.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = { searchTerm: '' };
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.fetchProjects(data).then(res => this.props.history.push(`/projects/${res.project.id}`));
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="text" value="" onChange={this.update('searchTerm')} />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchForm;
