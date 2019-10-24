import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: this.state.username
    };

    console.log(user);
    const token = localStorage.getItem("token");
    await fetch("/users/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    this.setState({
      username: ""
    });
  }

  render() {
    return (
      <div className="container createUserContainer">
        <h3 className="user">Create A New User</h3>
        <form className="createUserForm" onSubmit={this.onSubmit}>
          {/* <div className="form-group"> */}
            <input  type="text"
                required
                placeholder="Username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          {/* </div> */}
          {/* <div className="form-group"> */}
            <input type="submit" value="Create User" className="btn btn-primary" />
          {/* </div> */}
        </form>
      </div>
    );
  }
}