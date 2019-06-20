import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


const Exam = (props)=>(
   
    <tr>
        <td>{props.exam.examname}</td>
        <td>{props.exam.coursename}</td>
        <td>{Date(props.exam.duedate)}</td>
        <td><input type="date" value={this.props}/></td>
        <td><button className="btn btn-primary" onClick={()=>examupdate.updateDate(props.exam._id)}>change</button></td>


    </tr>
);

class examupdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exams: [],
      updateddate:null
    };
    
  }

  componentDidMount() {
    axios
      .get("/api/exams/getExams")
      .then(response => {
        this.setState({ exams: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  listelements(){
    return this.state.exams.map((exam,i)=>{
        return <Exam exam = {exam} key={i}/>
    })
}


  render() {
    return (
      <div className="container">
        <h2>Update Exams</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>examname</td>
              <td>coursename</td>
              <td>due date</td>
              <td>change date</td>

            </tr>
          </thead>
          <tbody>{this.listelements()}
          </tbody>
        </table>
      </div>
    );
  }
}


export default examupdate;
