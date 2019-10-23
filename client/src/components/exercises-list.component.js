import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id); }}>delete</a>
    </td>
  </tr>
);

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      exercises: [],
      username: ""
    };
  }

  componentDidMount() {
    axios.get("/exercises/")
      .then(response => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Gets all Users - Used for 'All' button in form
  getAllUsers = () => {
    axios.get("/exercises/")
      .then(response => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    axios.delete("/exercises/"+id)
      .then(response => { console.log(response.data);});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    });
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    });
  }

// Currently working on this search function
findExerciseUser(username) {
  axios.get("/exercises/find/" + username)
    .then(response => { console.log(response.data); })

  this.setState({
    exercises: this.state.exercises.filter(el => el.username === username)
  });
}

  // onChangeUsername function keeps track of name entered in search
  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  // onSubmit function for finding a specific user
  onSubmit = (e) => {
    e.preventDefault();

    const user = this.state.username

    console.log(user);

    this.setState({
      username: ""
    });

    this.findExerciseUser(user)

    console.log(`The username is: ${this.state.username}`)
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <form onSubmit={this.onSubmit}>
          <input className="searchInput" type="text" required value={this.state.username} onChange={this.onChangeUsername} placeholder="Search for a name..." />
          <input type="submit" value="Find User" />
          <input type="button" value="All" onClick={this.getAllUsers} />
        </form>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    );
  }
}