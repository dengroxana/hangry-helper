import React from 'react';
import { Component } from 'react';
import {Link} from "react-router-dom";
import {
    getAllRestaurants,
 
  } from "../services/api-helper";

class AllRestaurants extends Component {
    state = {
        restaurants: []
    }
    componentDidMount() {
     
        this.readAllRestaurants();
      }
      readAllRestaurants = async () => {
        const restaurants = await getAllRestaurants();
        this.setState({ restaurants });
      };


    render() {
        return(
            <div>
<h2>Restaurants</h2>
          <div className="add-link"></div>
<br/>
<div>
{this.state.restaurants.map(restaurant => (
  <React.Fragment key={restaurant.id}>
    <p className="res-list">
    <Link to={`/restaurants/${restaurant.id}`}>{restaurant.restaurant_name}</Link></p>
<p>{restaurant.location}</p>
<p>Price Range: {restaurant.price_range}</p>
   
    <Link to={`/restaurants/${restaurant.id}/`}> <button>Edit</button></Link>
    <button onClick={() => {
      this.props.handleResDelete(restaurant.id);
    }}>Delete</button>
    
  </React.Fragment>
))}
</div>
</div>
        )
        
    }
}

export default AllRestaurants