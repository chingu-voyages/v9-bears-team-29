import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { MDBJumbotron, MDBBtn, MDBRow, MDBCardBody, MDBCardTitle, MDBContainer, MDBCol } from 'mdbreact';

class Landing extends Component {

  render() {
    return (
      <div className="content">
        <MDBContainer className="mt-5 text-center">
              <MDBRow>
                  <MDBCol>
                  <MDBJumbotron className="text-center">
                    <MDBCardBody>
                    <MDBCardTitle className="h2">
                    Welcome to Pawfit!
                    </MDBCardTitle>
                    <p className="my-4">Whether you are looking to adopt your own furry friend, or a shelter hoping to show off your available pups, you have come to the perfect place. </p>
                    <MDBBtn outline color="primary">
                    <Link className="black-text" to="/user/index">Looking to Adopt</Link>
                  </MDBBtn>
                  <MDBBtn outline color="success">
                    <Link className="black-text" to="">Animal Shelters</Link>
                  </MDBBtn>
                    </MDBCardBody>
                    </MDBJumbotron>
                  </MDBCol>
              </MDBRow>
          </MDBContainer>
      </div>
    )
  }
}



export default Landing;

/// site intro and buttons leading to users landing and admin/shelter landing for sign in/sign up
