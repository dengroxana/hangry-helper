import React, { Component } from "react";
// import { Route } from 'react-router-dom';
import { getAllCategories } from "./services/api-helper";
import "./App.css";

export default class App extends Component {
  constructor(props){
    super(props)
  this.state = {
    categories: []
  }
  };

  componentDidMount() {
    this.readAllCategories();
  }
  readAllCategories = async () => {
    const categories = await getAllCategories();
    this.setState({ categories });
  };

  render() {
    return (
      <div className="App">
        <h3>Categories</h3>
        {this.state.categories.map(category => (
        <p key={category.id}>{category.category_name}</p>
      ))}
      </div>
    );
  }
}
