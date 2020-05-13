import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import {
  getAllCategories,
  getAllRestaurants,
  // postFood,
  // putFood,
  // destroyFood,
} from "../services/api-helper";
import AllRestaurants from "./AllRestaurants";

class AllCategories extends Component {
  state = { categories: [], showAll: false };

  componentDidMount() {
    this.readAllCategories();
    // this.readAllRestaurants();
  }
  readAllCategories = async () => {
    const categories = await getAllCategories();
    this.setState({ categories });
  };
  // readAllRestaurants = async () => {
  //   const restaurants = await getAllRestaurants();
  //   this.setState({ restaurants });
  // };
  categoryHandler = () => {
    const showRes = this.state.showAll;
    this.setState({showAll : !showRes})
  };

  render() {
    if (this.state.showAll) {
    return (
      <div>
        {/* <label for="categories">Choose a category:</label> */}
        <br />
        {/* <select id="categories"> */}
        {this.state.categories.map((category) => (
          // <option value={category.id}>{category.category_name}</option>
          <h3 key={category.id}>
            {category.category_name}
          </h3>
        ))}
        <button onClick={this.categoryHandler} >Show Less</button>
{this.state.showAll ? <AllRestaurants /> : null}
          
     
        {/* {showRes.map(restaurant => (
          <p key={restaurant.id}>{restaurant.restaurant_name}</p>
        ))} */}  

        {/* </select> */}
      </div>
    );
      }
      else {
        return (
          <div>
            {this.state.categories.map((category) => (
          // <option value={category.id}>{category.category_name}</option>
          <h3 key={category.id}>
            {category.category_name}
          </h3>
        ))}
        <button onClick={this.categoryHandler} >Show More</button>
{this.state.showAll ? <AllRestaurants /> : null}
          
          </div>
        )
      }
  }
}

export default AllCategories;
