import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import TableRow from "./TableRow";
import { Link } from "react-router-dom";

class uploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file:'',
      files:[]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);

  }

//   componentDidMount() {
//     axios
//       .get("/api/users/admin")
//       .then(response => {
//         this.setState({ users: response.data });
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }

componentDidMount() {
    axios
      .get("/api/student/getfiles")
      .then(response => {
        this.setState({ files: response.data});
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
handleSubmit(event) {
    event.preventDefault();
    var formdata=new FormData();
    var file=document.querySelector('#file');
    formdata.append("file",file.files[0]);
    axios
      .post("/api/student/addFile",formdata, {
        headers:{
            'Content-Type':'multipart/form-data'
        }
      })
      .then(response => {
        console.log("file added" + response.data);
      })
      .catch(error => {
        console.log(error);
      });

  }

  tabRow() {
    return this.state.users.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  render() {

    let files=this.state.files;
    let File=files.map((file)=>
    <tr>
      
      <td>{file._id}</td>
      <td>{file.file}</td>
      <td><img value={file.data} src={"./public/uploads/{{file.file}}"}download/></td>
      <td><a href={process.env.PUBLIC_URL+'/uploads/{{file.file}}'}download>download</a></td>
    </tr>
  
    );
    return (
      <div className="container">
        <header>
          <br/>
          <Link to="/sechome">
            <button className="btn btn-dark col-md-3">Home </button>
          </Link>
        
          <Link to="/addCourse">
            <button className="btn btn-dark col-md-3 ml-3">Courses</button>
          </Link>
        </header>
        <br/>
       <from id="uploadfile"method="post"enctype="multipart/form-data">
           <div class="form-group">
               <lable>Upload file</lable>
               <input type="file"name="file"id="file"class="form-control"value={this.state.file}onChange={this.handleChange}/>
           </div>

           <button className="btn btn-primary col-md-3 ml-3"onClick={this.handleSubmit}>Submit</button>
       </from>

       <table className="table table-striped">
          <thead>
            <tr>

              <td>file id</td>
              <td>file name</td>
              <td>file</td>
              <td></td>
              {/* <td>update</td> */}

              

            </tr>
          </thead>
          <tbody>
          {File}
          </tbody>
        </table>
      </div>
    );
  }
}

export default uploadFile;
