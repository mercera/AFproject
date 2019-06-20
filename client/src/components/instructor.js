import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class instructor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <header>
                    <br />
                    <Link to="/sechome">
                        <button className="btn btn-dark col-md-3">Home </button>
                    </Link>
                    <Link to="/manageAssignments">
                        <button className="btn btn-dark col-md-3 ml-3">Manage Assignments </button>
                    </Link>
                    <Link to="/manageExams">
                        <button className="btn btn-dark col-md-3 ml-3">Manage Exams </button>
                    </Link>
                </header>
            </div>
        );
    }
}

export default instructor;
