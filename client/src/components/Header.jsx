import React, { Component } from "react";
import "./Header.css";
import logo from "../images/brand.png"
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo}/>
        <Link to="/login">Login - Register</Link>
      </div>
    );
  }
}

export default Header;
