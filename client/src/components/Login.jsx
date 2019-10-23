import React from "react";


const Login = () => {
  const port = process.env.PORT || 5000;
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
  const loginHandler = async () => {
    const fetchData = await fetch(`http://localhost:${port}/api/login`, {
      method: "POST"
    });
    const jsonData = await fetchData.json();
    localStorage.setItem("token", jsonData.token);
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