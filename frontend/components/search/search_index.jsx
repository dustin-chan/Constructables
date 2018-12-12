import React from 'react';
import SearchProjectItem from './search_index_item';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const projects = this.props.projects.map(project => {
      return <SearchProjectItem key={project.id} project={project} />;
    });

    return (
      <div>
        <div className="search-background"/>
        <h3 className="search-title">Search Results</h3>
        <ul className="search-projects">
          {projects}
        </ul>
      </div>
    );
  }
}

export default SearchIndex;
