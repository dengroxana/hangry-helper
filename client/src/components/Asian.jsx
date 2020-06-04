import React, { Component } from "react";
import { getAllRestaurants } from "../services/api-helper";

export default class Asian extends Component {
  state = {
    restaurants: [],
  };
  componentDidMount() {
    this.readAllRestaurants();
  }
  readAllRestaurants = async () => {
    const restaurants = await getAllRestaurants();
    this.setState({ restaurants });
  };
  render() {
    return (
      <div>
        {this.state.restaurants.map((restaurant) => (
          <p key={restaurant.id}>{restaurant.category_id === 13 && restaurant.restaurant_name}</p>
        ))}
      </div>
    );
  }
}