import React, { Component } from 'react';

class ProjectItem extends Component {
  handleDelete(id){
    this.props.onDelete(id)
  }

  render() {
    const { project } = this.props
    return (
      <li className="Project">
        {project.title} - {project.category} <button onClick={this.handleDelete.bind(this, project.id)}>X</button>
      </li>
    )
  }
}

export default ProjectItem
