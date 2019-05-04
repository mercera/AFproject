import React, { Component } from "react";
import image from "./../image.png";
import { Link } from "react-router-dom";

class home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <img src={image} className="App-logo" alt="" />
          <br />
          <br />
          <br />
          <h1 className="App-title">CourseWeb</h1>
        </header>

        <p>
          <Link to="/login">
            <button>Login </button>
          </Link>
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        </p>
      </React.Fragment>
    );
  }
}

export default home;
