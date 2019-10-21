import React from "react";


const Login = () => {
  const state = {
    username: "",
    password: ""
  };
  const usernameOnChange = e => {
    console.log(e);
  };
  const passwordOnChange = e => {
    console.log(e);
  };
  const loginHandler = () => {
    console.log("login button");
  };

  return (
    <div className="container">
      <div className="loginContainer">
        <h2>Username</h2>
        <input onChange={usernameOnChange} />
        <h2>Password</h2>
        <input onChange={passwordOnChange} />
        <button onClick={loginHandler}>Login</button>
      </div>
    </div>
  );
};

export default Login; 