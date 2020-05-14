import React, { Component } from 'react'

export default class CreateRes extends Component {
  state = {
    name: ""
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleResSubmit(this.state);
        this.props.history.push('/restaurants');
      }}>
        <h3>Add Restaurant</h3>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button>Submit</button>

      </form>
    )
  }
}
