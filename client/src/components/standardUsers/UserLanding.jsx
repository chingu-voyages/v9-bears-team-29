import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions/userActions';
import UserNav from './partials/UserNavbar';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardTitle } from 'mdbreact';

function mapStateToProps(state) {
    const { user, loggedIn } = state.authentication;
    return {
        user,
        loggedIn
    }
}

class ConnectedUserLanding extends Component {

    constructor(props){
        super(props);

        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut() {
        const { dispatch } = this.props;
        dispatch(userActions.signOut());
    }

    render() {
    const { user, loggedIn } = this.props;
    let buttonGroup;

    if (user && loggedIn){
        buttonGroup = (
        <MDBBtn className="black-text" outline color="warning" onClick={this.handleLogOut}>
        Sign Out
        </MDBBtn>
        )
    } else {
        buttonGroup = (
            <div className="text-center">
            <MDBBtn outline color="primary">
                <Link className="black-text" to="/user/sign_in">Sign In</Link>
            </MDBBtn>
            <MDBBtn outline color="success">
                <Link className="black-text" to="/user/register">Sign Up</Link>
            </MDBBtn>
            </div>
        )
    }

    return (
      <div className="content">
          <MDBContainer className="mt-5 text-center">
              <MDBRow>
                  <MDBCol>
                  <MDBJumbotron className="text-center">
                    <MDBCardBody>
                    <MDBCardTitle className="h2">
                    Welcome to Pawfit
                    </MDBCardTitle>
                    <p className="my-4">
                        Swipe your way to your furrever friend.
                    </p>
                    {buttonGroup}
                    </MDBCardBody>
                    </MDBJumbotron>
                  </MDBCol>
              </MDBRow>
          </MDBContainer>
         
      </div>
    )
  }
}

const UserLanding = connect(mapStateToProps)(ConnectedUserLanding);

export default UserLanding;
