import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { actionCreators } from './reducer'
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'

const mapStateToProps = (state) => ({
  projects: state.projects,
})

class App extends Component {
  handleAddProject(project){
    const {dispatch} = this.props
    dispatch(actionCreators.add(project))
  }

  handleDeleteProject(id){
    const {dispatch} = this.props
    dispatch(actionCreators.remove(id))
  }

  render() {
    const {projects} = this.props
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
