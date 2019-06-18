import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


class TableRow extends Component {
  render() {
    return (

        <tr>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.username}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
          <div class="form-group col-md-10">
      <select id="inputState" class="form-control">
          <option selected>Admin</option>
          <option selected>Instructor</option> 
          <option selected>Student</option> 
          <option selected>{this.props.obj.role}</option>
          {/* <option selected>{this.props.obj.role}</option> */}
        
      </select>
    </div>
          </td>
          <td><button className="btn btn-primary">set Role</button></td>
        </tr>
    );
  }
}

export default TableRow;