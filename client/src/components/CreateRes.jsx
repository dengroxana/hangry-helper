import React, { Component } from "react";
import { getAllCategories } from "../services/api-helper";
import "./CreateRes.css"

export default class CreateRes extends Component {
  state = {
    categories: "",
    new_res: {
      restaurant_name: "",
      price_range: "",
      location: "",
      user_id: this.props.currentUser.id,
      category_id: "",
    },
  };
  componentDidMount() {
    this.readAllCategories();

  }
  readAllCategories = async () => {
    const categories = await getAllCategories();
    this.setState({ categories });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
     
      new_res: {
        ...this.state.new_res,
        user_id: this.props.currentUser.id,
        [name]: value
        
      },
    });
  
  };
  handleSelect = (e) => {

this.setState({
  new_res: {
    category_id: e.target.value
  }
})
  }

  render() {
    return (
      <>
        <form
          onSubmit={(e) => {        
            e.preventDefault();
            this.props.handleResSubmit(this.state.new_res);
            this.props.history.push("/categories");
          }}
        >
          <h2>Add Restaurant</h2>
          <div className="login-form">
        <select onChange={this.handleSelect} name="category_id" value={this.state.new_res.category_id}>
          <option>Select A Category</option>
          {this.state.categories && this.state.categories.map((category) => (
            <option key={category.id} value={category.id}>{category.category_name}</option>
          ))}
        </select>
        <br/>
        <p>Restaurant:</p>
          <input
            type="text"
            name="restaurant_name"
            value={this.state.new_res.restaurant_name}
            onChange={this.handleChange}
          />
          <br/>
          <p>Location:</p>
          <input
            type="text"
            name="location"
            value={this.state.new_res.location}
            onChange={this.handleChange}
          />
          <br/>
          <p>Price Range:</p>
          <input
            type="text"
            name="price_range"
            value={this.state.new_res.price_range}
            onChange={this.handleChange}
          />
          <br/>
          <button>Submit</button>
          </div>
        </form>
      </>
    );
  }
}
