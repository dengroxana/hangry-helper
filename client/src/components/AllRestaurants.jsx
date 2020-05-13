import React from 'react';
import { Component } from 'react';
import {
    // getAllCategories,
    getAllRestaurants,
    // postFood,
    // putFood,
    // destroyFood,
  } from "../services/api-helper";

// function AllRestaurants(props) {
// return (
//     <div>
//       <h3>Restaurants</h3>
//       {props.restaurant.map(restaurant => (
//         <p key={restaurant.id}>{restaurant.restaurant_name}</p>
//       ))}
//       </div>
// )
// }

class AllRestaurants extends Component {
    state = {
        restaurants: []
    }
    componentDidMount() {
        // this.readAllCategories();
        this.readAllRestaurants();
      }
      readAllRestaurants = async () => {
        const restaurants = await getAllRestaurants();
        this.setState({ restaurants });
      };

    render() {
        return(
            <div>
 <h3>Restaurants</h3>
       {this.state.restaurants.map(restaurant => (
        <p key={restaurant.id}>{restaurant.restaurant_name}</p>
      ))}
            </div>
        )
    }
}

export default AllRestaurants