import React from 'react';
import StepForm from '../step_form/step_form';
// import 'react-quill/dist/quill.snow.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    // 
    this.state = { searchTerm: '' };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.props.requestProjects(this.state.searchTerm).then(res => this.props.history.push(`/howto/`));
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="text" value={`${this.state.searchTerm}`} onChange={this.update('searchTerm')} />
        <button className="search-button">Search</button>
      </form>
    );
  }
}

export default SearchForm;
