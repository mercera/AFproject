import React, { Component } from "react";
//import axios from "axios";
import { Redirect } from "react-router-dom";
import { authenticationService } from "../services/authentication.service";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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

    authenticationService
      .login(this.state.email, this.state.password)
      .then(user => {
        this.setState({
          //redirect to login page
          redirectTo: "/sechome"
        });
      });

    // axios
    //   .post("/api/users/login", {
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    //   .then(response => {
    //     if (response.status === 200) {
    //       console.log(response.data);
    //       this.setState({
    //         //redirect to login page
    //         redirectTo: "/sechome"
    //       });
    //     } else console.log("password incorrect");
    //   })
    //   .catch(error => {
    //     console.log("signup error: ");
    //     console.log(error);
    //   });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <h4> login </h4>
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
              <label>Password</label>
            </div>
            <input
              type="text"
              id="Password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <div>
              <button onClick={this.handleSubmit} type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default Login;
