import React, { Component } from "react";
import { getAllCategories } from "../services/api-helper";

export default class CreateRes extends Component {
  state = {
    categories: "",
    resData: {
      restaurant_name: "",
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
      resData: {
        [name]: value,
      },
    });
  };
  handleSelect = (e) => {

this.setState({
  resData: {
    category_id: e.target.value
  }
})
  }

  render() {
    return (
      <>
        <select onChange={this.handleSelect}>
          <option>Select A Category</option>
          {this.state.categories && this.state.categories.map((category) => (
            <option value={category.id}>{category.category_name}</option>
          ))}
        </select>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleResSubmit(this.state.resData);
            this.props.history.push("/restaurants");
          }}
        >
          <h3>Add Restaurant</h3>
          <input
            type="text"
            name="restaurant_name"
            value={this.state.resData.restaurant_name}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}
