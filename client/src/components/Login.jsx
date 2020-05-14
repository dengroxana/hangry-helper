import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    
  }
  handleChange = (e) => {

    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleLogin(this.state);
          this.props.history.push("/");
        }}
      >
     
        <h3>Login</h3>

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <button>Submit</button>
        <br />
        <Link to="/register">Register</Link>
      </form>
    );
  }
}
