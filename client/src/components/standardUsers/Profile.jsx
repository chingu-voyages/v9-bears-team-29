import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../../actions/userActions';
import { MDBBtn, MDBCol, MDBRow, MDBContainer } from 'mdbreact'
import ShowProfile from './profileForm/ShowProfile';

function mapStateToProps(state) {
    const { user } = state.authentication
    const { profile, fetched } = state.userProfile
    return {
        user,
        profile,
        fetched
    };
}

class ConnectedProfile extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount() {
        const { dispatch, user } = this.props;
        dispatch(userActions.getProfile(user.response._id));
    }

    render() {
        const { user, profile, fetched } = this.props;
        

        let buttonGroup;
        let view;

        if (user && user.response.profile && profile && profile.profile){
            buttonGroup = (
                <div style={{marginLeft: '35px'}}>
                    <MDBBtn outline color="primary">
                        <Link to='/user/edit_profile'>Edit</Link>
                    </MDBBtn>
                </div>
            )
        } else {
            buttonGroup = (
                <div style={{marginLeft: '35px'}}>
                    <MDBBtn outline color="primary">
                    <Link to='/user/add_profile'>Add</Link>
                    </MDBBtn>
                </div>
            )

        }

        if (fetched) {
            view = (
                <ShowProfile data={profile.profile.profile} />
            )
        }

        return (
            <div className="content">
                <div className="profile" style={{paddingTop: '25px'}}>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="8">
                            {view}
                        </MDBCol>
                        <MDBCol size="4">
                            <MDBRow>
                                {buttonGroup}
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                </div>
            </div>
        );
    }
}

const UserProfile = connect(mapStateToProps)(ConnectedProfile);

export default UserProfile;