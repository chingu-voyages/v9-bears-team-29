import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { MDBJumbotron, MDBBtn, MDBRow } from 'mdbreact';

class Landing extends Component {

  render() {
    return (
      <div className="content">
        <MDBRow className="text-center">
        <MDBJumbotron>
          <h1>Welcome to Pawfit!</h1>
          <MDBBtn color="primary">
            <Link className="black-text" to="/user/index">Looking to Adopt</Link>
          </MDBBtn>
          <MDBBtn color="success">
            <Link className="black-text" to="">Animal Shelter</Link>
          </MDBBtn>
        </MDBJumbotron>
        </MDBRow>
      </div>
    )
  }
}

export default Landing;

/// site intro and buttons leading to users landing and admin/shelter landing for sign in/sign up
