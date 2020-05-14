import React, { Component } from 'react'
import { getOneRestaurant, addCategory } from '../services/api-helper';

export default class SingleRes extends Component {
  state = {
    restaurant: null,
    category: ''
  }
  componentDidMount() {
    this.setRestaurant()
  }

  setRestaurant = async () => {
    const restaurant = await getOneRestaurant(this.props.id);
    this.setState({ restaurant })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      category: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const category = await addCategory(this.state.category, this.state.restaurant.id);
    this.setState({ category });
  }

  render() {
    const { restaurant } = this.state;
    return (
      <div>
        {
          restaurant && (
            <>
              <h3>{restaurant.restaurant_name}</h3>
              {restaurant.categories.map(category => (
                <p key={category.id}>{category.category_name}</p>
              ))}
            </>
          )
        }
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            <option>--Select a Category--</option>
            {this.props.categories.map(category => (
              <option value={category.id} key={category.id}>{category.category_name}</option>
            ))}
          </select>
          <button>Add a Category</button>
        </form>
      </div>
    )
  }
}
