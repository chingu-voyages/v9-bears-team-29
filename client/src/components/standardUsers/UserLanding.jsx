import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions/userActions';
import { MDBJumbotron, MDBBtn } from 'mdbreact';

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
        <MDBBtn color="warning" onClick={this.handleLogOut}>
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
          <MDBJumbotron text-center>
            {buttonGroup}
        </MDBJumbotron>
      </div>
    )
  }
}

const UserLanding = connect(mapStateToProps)(ConnectedUserLanding);

export default UserLanding;
