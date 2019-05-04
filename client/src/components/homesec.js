import React, { Component } from "react";
import { authenticationService } from "../services/authentication.service";

class homesec extends Component {
  state = {};

  logout() {
    authenticationService.logout();
  }

  render() {
    return (
      <React.Fragment>
        <h3>You are logged in to home page</h3>
        <a onClick={this.logout}>Logout</a>
      </React.Fragment>
    );
  }
}

export default homesec;
