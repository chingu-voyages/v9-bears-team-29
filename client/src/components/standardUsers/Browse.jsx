import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state){
    const { user } = state.authentication;
    const { message, type } = state.alert;
    return {
        user,
        message,
        type
    }
}

class ConnectedBrowse extends Component {
    
    render() {

        return (
            <div className="content">
                <p>DOGGOS</p>
            </div>
        )
    }
}

const Browse = connect(mapStateToProps)(ConnectedBrowse);

export default Browse;