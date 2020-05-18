import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <div>
      <div className="fixed">
      <div className="header">
          <div className="logo-back">
            <div className="text">
        <Link to="/">
          <h2 className="header-logo">Hangry Helper</h2>
        </Link>
        </div>
        </div>
        <div className="auth">
          {props.currentUser ? (
            <>
              <p>Welcome back, {props.currentUser.first_name || props.currentUser.email}!</p>
              <button onClick={props.handleLogout}>Logout</button>
            </>
          ) : (<div className="head-link">
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      </div>
      
      {props.currentUser && (
        <>
          <div className="auth">
            <Link to="/categories">Categories</Link>
            <Link to="/new/restaurants">Add Restaurant</Link>
          </div>
        
        </>
      )}
      </div>
      </div>
    </header>
  );
}

export default Header;
