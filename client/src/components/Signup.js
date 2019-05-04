import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post("/api/users/", {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (this.state.password === this.state.confirmPassword) {
          console.log("successful signup");
          this.setState({
            //redirect to login page
            redirectTo: "/login"
          });
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <h4> Sign up </h4>
          <form>
            <div>
              <label>Email</label>
            </div>
            <input
              type="text"
              id="Email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div>
              <br />

              <label>Username</label>
            </div>
            <input
              type="text"
              id="Username"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br /> <br />
            <label>Password</label>
            <br />
            <input
              type="text"
              id="Password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />{" "}
            <br /> <br />
            <label>Confirm Password</label>
            <br />
            <input
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirm password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />{" "}
            <br /> <br />
            <button onClick={this.handleSubmit} type="submit">
              Sign up
            </button>
          </form>
        </div>
      );
    }
  }
}

export default Signup;
