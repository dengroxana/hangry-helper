import React, { Component } from 'react'

export default class EditPage extends Component {
  state = {
    name: ""
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
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
    // const { name } = this.props.restaurants.find(restaurant => {
    //   return restaurant.id === parseInt(this.props.id)
    // });
    // this.setState({ name });
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleResUpdate(this.props.resId, this.state);
        this.props.history.push('/restaurants');
      }}>
        <h3>Update Food</h3>
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
