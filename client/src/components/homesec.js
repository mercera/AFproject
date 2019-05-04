import React, { Component } from "react";
import { authenticationService } from "../services/authentication.service";
import { Link } from "react-router-dom";

class homesec extends Component {
  state = {};

  logout() {
    authenticationService.logout();
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <Link to="/admin">
            <button>admin </button>
          </Link>
          <Link to="/student">
            <button>Student </button>
          </Link>
          <Link to="/instructor">
            <button>Instructor </button>
          </Link>
          <button onClick={this.logout}>Logout</button>
        </header>
        <h3>You are logged in to home page</h3>
      </React.Fragment>
    );
  }
}

export default homesec;
