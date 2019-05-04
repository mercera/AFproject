import React, { Component } from "react";
import "./App.css";
import { Route, Router } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { history } from "./helpers/history";
import { role } from "./helpers/role";
import Home from "./components/home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import admin from "./components/admin";
import homesec from "./components/homesec";
import { authenticationService } from "./services/authentication.service";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isAdmin: false
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(user =>
      this.setState({
        currentUser: user,
        isAdmin: user && user.role === role.Admin
      })
    );
  }
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Route exact path="/" component={Home} />

          <Route path="/signup" component={Signup} />

          <Route path="/login" component={Login} />

          <PrivateRoute path="/admin" roles={[role.Admin]} component={admin} />
          <PrivateRoute path="/sechome" component={homesec} />
        </div>
      </Router>
    );
  }
}

export default App;
