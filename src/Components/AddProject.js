import React, { Component } from 'react';

class AddProject extends Component {
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  constructor(){
    super()
    this.state = {
      newProject : {}
    }
  }

  handleSubmit(e){
    const { title, category } = this.refs
    if(!title.value)
      alert('Title is required')
    else
      this.setState({
        newProject: {
          title: title.value,
          category: category.value
        }
      }, () => {
        this.props.addProject(this.state.newProject)
      })
    e.preventDefault()
  }

  render() {
    let categoryOptions = this.props
                              .categories
                              .map(each => <option key={each}>{each}</option> )
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title"/>
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default AddProject
