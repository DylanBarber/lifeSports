import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  port = process.env.PORT || 5000;
  state = {
    username: "",
    password: "",
    token: "",
    loginContent: ""
  };
  usernameOnChange = e => {
    this.setState({ username: e.target.value });
  };
  passwordOnChange = e => {
    this.setState({ password: e.target.value });
  };
  loginHandler = async () => {
    const fetchData = await fetch(`http://localhost:${this.port}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    });
    const jsonData = await fetchData.json();
    if (jsonData.token) {
      localStorage.setItem("token", jsonData.token);
      this.setState({ adminLoggedIn: true });
    } else {
      this.setState({ adminLoggedIn: false });
    }


  };
  render() {
    return (
      <div className="container">
        <div className="loginContainer">
          <h2>Username</h2>
          <input onChange={this.usernameOnChange} />
          <h2>Password</h2>
          <input onChange={this.passwordOnChange} />
          <button onClick={this.loginHandler}>Login</button>
          {this.state.adminLoggedIn ? <Redirect to="/" /> :
          <p>Incorrect Username or Password</p>}
        </div>
      </div>
    );
  }
};

export default Login;
