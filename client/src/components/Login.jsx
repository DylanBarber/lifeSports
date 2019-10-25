import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    adminLoggedIn: null
  };
  usernameOnChange = e => {
    this.setState({ username: e.target.value });
  };
  passwordOnChange = e => {
    this.setState({ password: e.target.value });
  };
  loginHandler = async () => {
    const port = process.env.PORT || 5000;
    const fetchData = await fetch("lifesportswebsite.herokuapp.com/api/login", {
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
    let errorOrRedirect = "";
    if (this.state.adminLoggedIn){
      errorOrRedirect = <Redirect to="/" />;
    } else if (this.state.adminLoggedIn === false){
      errorOrRedirect = <p>Incorrect Username or Password</p>;
    }
    return (
      <div className="container">
        <div className="loginContainer">
          <h2>Username</h2>
          <input onChange={this.usernameOnChange} placeholder="Username" />
          <h2>Password</h2>
          <input onChange={this.passwordOnChange} placeholder="Password" />
          <button onClick={this.loginHandler}>Login</button>
          {errorOrRedirect}


        </div>
      </div>
    );
  }
};

export default Login;
