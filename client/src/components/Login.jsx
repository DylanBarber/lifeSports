import React from "react";


class Login extends React.Component {
  port = process.env.PORT || 5000;
  state = {
    username: "",
    password: ""
  };
  usernameOnChange = e => {
    this.setState({username: e.target.value});
  };
  passwordOnChange = e => {
    this.setState({password: e.target.value});
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
    localStorage.setItem("token", jsonData.token);
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
        </div>
      </div>
    );
  }
};

export default Login; 