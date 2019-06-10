import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserNav from './partials/UserNavbar';
import { MDBAlert } from 'mdbreact'

function mapStateToProps(state) {
    const { user } = state.authentication;
    const { message, type } = state.alert;
    return {
        user,
        message,
        type
    };
}

class ConnectedProfile extends Component {
    render() {
        const { message, type, user } = this.props;

        return (
            <div className="content">
                <UserNav />

                <div className="profile">
                {message && type === "alert-danger" ? <MDBAlert color="danger">{message}</MDBAlert> : <p></p>}
                {message && type === "alert-success" ? <MDBAlert color="success">{message}</MDBAlert> : <p></p>}


                </div>
            </div>
        );
    }
}

const Profile = connect(mapStateToProps)(ConnectedProfile);

export default Profile;