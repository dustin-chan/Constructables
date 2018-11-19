import React from 'react';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestProject(this.props.match.params.projectId);
  }

  render() {

    return (
      <div>

      </div>
    );
  }
}

export default ProjectShow;
