import React, { Component } from "react";
import Rand from "./GenerateRand";
import Login from './Login';
import Register from "./Register"
import { Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <>
      <Route path='/login' render={(props) => (
          <Login
            {...props}
            handleLogin={this.props.handleLogin}
          />
        )} />
         <Route path='/register' render={(props) => (
          <Register
            {...props}
            handleRegister={this.props.handleRegister}
          />
        )} />
        <Route path="/generate" render={() => <Rand />} />
      </>
    );
  }
}

export default Main;