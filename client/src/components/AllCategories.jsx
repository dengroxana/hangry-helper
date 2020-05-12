import React, { Component } from "react";
import {
  getAllCategories,
  getAllFoods,
  postFood,
  putFood,
  destroyFood,
} from "../services/api-helper";

class AllCategories extends Component {
  state = { categories: [] };
  componentDidMount() {
    this.readAllCategories();
  }
  readAllCategories = async () => {
    const categories = await getAllCategories();
    this.setState({ categories });
  };
  render() {
    return (
      <div>
          <label for="categories">Choose a category:</label>
          <br/>
      <select id="categories">
          {this.state.categories.map(category => (
              <option value={category.id}>{category.category_name}</option>
        
      ))}
        </select>
      </div>
    );
  }
}

export default AllCategories;
