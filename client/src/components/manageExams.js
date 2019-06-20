import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class manageExam extends Component {
  constructor() {
    super();
    this.state = {
        examname:'',
        coursename:'',
        description:'',
        duedate:null,
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

//   componentDidMount() {
//     axios
//       .get("/api/users/admincou")
//       .then(response => {
//         this.setState({ users: response.data });
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("/api/exams/addExam", {
        examname: this.state.examname,
        coursename: this.state.coursename,
        description: this.state.description,
        duedate:this.state.duedate
      })
      .then(response => {
        console.log("data added" + response.data);
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      examname: "",
      coursename: "",
      description: "",
      duedate:null
    });
  }

  render() {
    // let instructors = this.state.users;
    // let options = instructors.map(user => (
    //   <option key={user.username}>{user.username}</option>
    // ));

    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <h4> Manage Exams </h4>
          <form>
            <div>
              <label>Name</label>
            </div>
            <input
              type="text"
              id="examname"
              name="examname"
              placeholder="examname"
              value={this.state.examname}
              onChange={this.handleChange}
            />
            <div>
              <label>course</label>
            </div>
            <input
              type="text"
              id="coursename"
              name="coursename"
              placeholder="coursename"
              value={this.state.coursename}
              onChange={this.handleChange}
            />
             <div>
              <label>Description</label>
            </div>
            <input
              type="text"
              style={{maxHeight :"85px",minHeight:"68px",maxWidth:"560px",resize:"vertical",padding:"9px",boxSizing:"border-box",fontSize:"15px"}}
              id="description"
              name="description"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <div>
              <label>due date</label>
            </div>
            <div style={{marginLeft:"580px"}}className="row">
            <input type="date" id="duedate" 
          placeholder="duedate" 
          class="from-control"
          name="duedate"
          value={this.state.date}
          onChange={this.handleChange}
          />&nbsp;
         
          </div>
          
          
            <br />
            <br />
            <div>
              <button
                className="btn btn-primary"
                onClick={this.handleSubmit}
                type="submit">
                Submit
              </button>&nbsp;
              <Link to="/updateExams">
            <button className="btn btn-dark ">UpdateExam </button>
          </Link>            
          
            </div>
          </form>
        </div>
      );
    }
  }
}

export default manageExam;
