import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import {
  getAllCategories,
  // getAllRestaurants,
  
} from "../services/api-helper";
import "../App.css"
import AllRestaurants from "./AllRestaurants";

class AllCategories extends Component {
  state = { categories: [], showAll: false };

  componentDidMount() {
    this.readAllCategories();
   
  }
  readAllCategories = async () => {
    const categories = await getAllCategories();
    this.setState({ categories });
  };

  categoryHandler = () => {
    const showRes = this.state.showAll;
    this.setState({showAll : !showRes})
  };

  render() {
    if (this.state.showAll) {
    return (
      <div>
      <div className="showCat">
  
        <br />
     
        {this.state.categories.map((category) => (

          <h3 className="catTitle"key={category.id}>
            {category.category_name}
          </h3>
        ))}
      
   </div>
        <button onClick={this.categoryHandler} >Show Less</button>
{this.state.showAll ? <AllRestaurants /> : null}

         
     
      </div>
    );
      }
      else {
        return (
          <div>
          <div className="showCat">
           
            {this.state.categories.map((category) => (
          <h3 className="catTitle"key={category.id}>
            {category.category_name}
          </h3>
        ))}
        
        </div>
        <button onClick={this.categoryHandler} >Show More</button>
{this.state.showAll ? <AllRestaurants /> : null}
         
          </div>
        )
      }
  }
}

export default AllCategories;
