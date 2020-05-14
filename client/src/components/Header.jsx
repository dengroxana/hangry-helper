import React, { Component } from "react";
import "./Header.css";
// import logo from "../images/brand.png"
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
       <Link to="/"><h3>Hangry Helper</h3></Link>
        <img src="#"alt=""/>
        <Link to="/login">Login - Register</Link>
        
        <Link to="/categories">Show All</Link>
      </div>
    );
  }
}

export default Header;
