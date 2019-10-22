import React from "react";

class ProtectedRouteTest extends React.Component {
  state = {
    testInfo: ""
  };
  requestTest = async () => {
    const port = process.env.PORT || 5000;
    const token = localStorage.getItem("token");
    const fetchData = await fetch(`http://localhost:${port}/api/posts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(fetchData);
    const jsonData = await fetchData.json();
    console.log(jsonData);
    // this.setState({ testInfo: jsonData });
  };
  render() {


    return (
      <div className="container">
        <button onClick={this.requestTest}>Test</button>
        {/* <h2>{this.state.testInfo}</h2> */}
      </div>
    );
  }
};

export default ProtectedRouteTest;