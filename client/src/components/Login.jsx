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
      <h2>Login</h2>
     
<div className="login-form">
        <div className="spacer"><label htmlFor="email">Email:</label></div>
        <input
          id="email"
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />
        <div className="spacer"><label htmlFor="password">Password:</label></div>
        <input
          id="password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <button>Submit</button>
     
      </div>
      </form>
    );
  }
}
