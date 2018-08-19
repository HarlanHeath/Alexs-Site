import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-body">
        <div className="nav-contain">
          <h2 className="site-name">Just Shoot Me Photography</h2>
          <Link to="/" className="route">
            Home
          </Link>
        </div>
      </div>
    );
  }
}
