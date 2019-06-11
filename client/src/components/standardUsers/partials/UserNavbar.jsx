import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBNavItem, 
    MDBNavLink, 
    MDBNavbarBrand, 
    MDBNavbar,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarNav,
    MDBIcon 
} from 'mdbreact';

function mapStateToProps(state) {
    const { user, loggedIn } = state.authentication;
    return {
        user,
        loggedIn
    }
}

class ConnectedNav extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }

        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { user, loggedIn } = this.props;

        let userNav;

        if (user && loggedIn){
            userNav = (
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <MDBNavLink to="/user/index"><MDBIcon icon="home" /> Home </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/user/browse">Browse Dogs</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to='/user/profile'>Profile</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to='/user/favorites'>Favorites</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            )
        } else {
            userNav = (
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <MDBNavLink to="/user/index"><MDBIcon icon="home" /> Home </MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            )
        }

        return (
            <div>
                <MDBNavbar color="warning-color" dark expand="md">
                    <MDBNavbarBrand href="/">
                        <strong className="black-text"><MDBIcon icon="dog" /> PawFit</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse" isOpen={this.state.isOpen} navbar>
                        {userNav}
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}

const UserNav = connect(mapStateToProps)(ConnectedNav);

export default UserNav;