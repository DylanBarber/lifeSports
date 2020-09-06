import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    axios.get("/users/")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };
    const token = localStorage.getItem("token");
    try {
      const makeFetch = await fetch("/exercises/add", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(exercise)
      });
    }
    catch (err) {
      if (err) return console.log(err);
    }
    window.location = "/";
  }

  render() {
    return (
      <div className="container createExerciseContainer">
        <h3 className="newExercise">Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit} className="createExerciseForm">

          <label>Username: </label>
          <select ref="userInput"
          className="userSelection"
            required
            value={this.state.username}
            onChange={this.onChangeUsername}>
            {
              this.state.users.map(function (user) {
                return <option
                  key={user}
                  value={user}>{user}
                </option>;
              })
            }
          </select>


          <label className="exerciseDescription">Description: </label>
          <input type="text"
            className="createExerciseInput"
            required
            placeholder="Description"
            value={this.state.description}
            onChange={this.onChangeDescription}
          />


          <label>Duration (in minutes): </label>
          <input
            className="createExerciseInput"
            type="text"
            value={this.state.duration}
            onChange={this.onChangeDuration}
          />


          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>



          <input type="submit" value="Create Exercise Log" className="btn-primary submitLog" />

        </form>
      </div>
    );
  }
}