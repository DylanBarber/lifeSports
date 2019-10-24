import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  logoutHandler = () => {
    localStorage.removeItem("token");
  };
  renderLoginOrLogout = () => {
    if (localStorage.getItem("token") !== null) {
      return (
        <li className="navbar-item" onClick={this.logoutHandler}>
          <Link className="nav-link">Logout</Link>;
      </li>
      );
    } else {
      return (
        <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>;
    </li>
      );
    }
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand"><img src="https://lifesports.org/wp-content/uploads/cropped-lifesports-logo-final-white.png"></img></Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Exercises</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Post New Workout</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>
            {this.renderLoginOrLogout()}

          </ul>
        </div>
      </nav>
    );
  }
}
export default withRouter(Navbar);