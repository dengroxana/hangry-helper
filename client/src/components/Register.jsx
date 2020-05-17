import React, { Component } from "react";

class Register extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { first_name, last_name,email, password } = this.state;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleRegister(this.state);
          this.props.history.push("/");
        }}
      >
        <h2>Register</h2>
        <div className="login-form">
        <label htmlFor="first-name">First Name:</label>
        <br/>
        <input
          id="first-name"
          type="text"
          name="first-name"
          value={first_name}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="first-name">Last Name:</label>
        <br/>
        <input
          id="last-name"
          type="text"
          name="last-name"
          value={last_name}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br/>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br/>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <br />
        <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default Register;
