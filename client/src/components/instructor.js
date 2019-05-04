import React, { Component } from "react";
import { Link } from "react-router-dom";

class instrcutor extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3>Welcome to Instructor Page!</h3>
        <Link to="/sechome">
          <button>Home </button>
        </Link>
      </React.Fragment>
    );
  }
}

export default instrcutor;
