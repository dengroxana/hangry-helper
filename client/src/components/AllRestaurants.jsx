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
 {/* <h3>Restaurants</h3>
       {this.state.restaurants.map(restaurant => (
        <p key={restaurant.id}>{restaurant.restaurant_name}</p>
      ))}
      <Link to="/restaurants/:id/edit">Edit</Link>
            </div> */}
<h3>Restaurants</h3>
<div className="food-list">
{this.state.restaurants.map(restaurant => (
  <React.Fragment key={restaurant.id}>
    <p>
    <Link to={`/restaurants/${restaurant.restaurant_name}`}>{restaurant.restaurant_name}</Link></p>
   
    <Link to={`/restaurants/${restaurant.restaurant_name}/edit`}> <button>Edit</button></Link>
    <button onClick={() => {
      this.state.handleResDelete(restaurant.id);
    }}>Delete</button>
    
  </React.Fragment>
))}
<Link to="/new/restaurants"><button>Create</button></Link>
</div>
</div>
        )
        
    }
}

export default AllRestaurants