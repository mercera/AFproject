import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";



class examupdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exams: [],
      duedate:null,
      updateddate:null
    };
    this.updatedate = this.updatedate.bind(this);
    this.handleChange = this.handleChange.bind(this);

    
  }

  componentDidMount() {
    axios
      .get("/api/exams/getExams")
      .then(response => {
        this.setState({ exams: response.data, duedate:response.data.duedate});
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

 updatedate(id){

   axios.put(`/api/exams/${id}`,{
      duedate:this.state.updateddate
   }).then(res=>{
     console.log(res);
     alert("due date extended");     
   }).catch(err=>{ 
     console.log(err);
   });
 }


  render() {
    let exams=this.state.exams;
    let Exam1=exams.map((exam)=>
    <tr>
      
      <td>{exam.examname}</td>
      <td>{exam.coursename}</td>
      <td>{exam.duedate}</td>
      <td><input id="daterestrict"type="date"min={exam.duedate}onChange={this.handleChange}name="updateddate"value={this.state.updateddate}/></td>
      <td><button className="btn btn-primary"onClick={()=>this.updatedate(exam._id)}>change</button></td>
    </tr>
  
    );
    //  var edit= exam=>{
    //   axios.put(`/api/exams/${exam._id}`,{
    //     duedate:this.state.updateddate
    //  }).then(res=>{
    //    console.log(res);
    //    alert("due date changed");     
    //  }).catch(err=>{
    //    console.log(err);
    //  });
    // }


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
          <tbody>
          {Exam1}
          </tbody>
        </table>
      </div>
    );
  }
}


export default examupdate;
