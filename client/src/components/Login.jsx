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
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (token === null) {
      this.setState({loginContent: (
        <>
          <h2>Username</h2>
          <input onChange={this.usernameOnChange} />
          <h2>Password</h2>
          <input onChange={this.passwordOnChange} />
          <button onClick={this.loginHandler}>Login</button>
        </>
      )});
    } else {
      this.setState({loginContent: (
        <h2>You are already logged in</h2>
      )});
    }
  }
  usernameOnChange = e => {
    this.setState({username: e.target.value});
  };
  passwordOnChange = e => {
    this.setState({password: e.target.value});
  };
  loginHandler = async () => {
    const fetchData = await fetch(`http://localhost:${this.port}/api/login`, {
      method: "POST"
    });
    const jsonData = await fetchData.json();
    if (jsonData.token !== undefined) {
      localStorage.setItem("token", jsonData.token);
      this.setState({ loggedIn: true });
    }
  };
  render() {
    return (
      this.state.loggedIn ? <Redirect to="/routetest" /> :
        <div className="container">
          <div className="loginContainer">
            {this.state.loginContent}
          </div>
        </div>
    );
  }
};

export default Login; 