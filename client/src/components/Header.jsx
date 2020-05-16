import React from "react";
import "./Header.css";
// import logo from "../images/brand.png"
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <div className="header">
        <Link to="/">
          <h3>Hangry Helper</h3>
        </Link>
        <div className="auth">
          {props.currentUser ? (
            <>
              <p>You're logged in as: {props.currentUser.first_name || props.currentUser.email}</p>
              <button onClick={props.handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login - Register</Link>
          )}
        </div>
      </div>
      
      {props.currentUser && (
        <>
          <div className="auth">
            <Link to="/categories">Categories</Link>
            <Link to="/restaurants">Restaurants</Link>
          </div>
        
        </>
      )}
    </header>
  );
}

export default Header;
