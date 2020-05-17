import React, { Component } from 'react'

export default class EditPage extends Component {
  state = {
    restaurant_name: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  componentDidMount() {
    if (this.props.restaurants.length) {
      this.setFormData();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.restaurants !== this.props.restaurants) {
      this.setFormData();
    }
  }

  setFormData = async () => {
    const { name } = this.props.restaurants.find(restaurant => {
      return restaurant.id === parseInt(this.props.id)
    });
    this.setState({ restaurant_name: name });
  }

  render() {
  
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleResUpdate(this.props.id, this.state);
        this.props.history.push('/restaurants');
      }}>
        <h2>Update Restaurant</h2>
        <p>Name:</p>
        <input
        name="restaurant_name"
          type="text"
          value={this.state.restaurant_name}
          onChange={this.handleChange}
        />
        <br/>
        <p>Location:</p>
        <input
        name="location"
          type="text"
          value={this.state.location}
          onChange={this.handleChange}
        /><br/>
        <button>Submit</button>

      </form>
    )
  }
}
