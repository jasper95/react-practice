import React, { Component } from 'react'
import ProjectItem from './ProjectItem'

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id)
  }

  renderProjects() {
    return this.props
               .projects
               .map(each => (<ProjectItem onDelete={ this.deleteProject.bind(this) } key={ each.id } project={ each }/>))
  }

  render() {
    return (
      <div className="Projects">
        { this.renderProjects() }
      </div>
    );
  }
}

export default Projects
