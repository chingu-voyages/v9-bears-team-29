import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "../helpers/history";
import { alertActions } from "../actions/alertActions";
import { Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import UserApp from './UserApp';
import UserProfile from './standardUsers/Profile';
import Favorites from './standardUsers/Favorites';
import Browse from './standardUsers/Browse';
import Register from './standardUsers/partials/Register';
import SignIn from './standardUsers/partials/SignIn'
import UserNav from './standardUsers/partials/UserNavbar';
import Form from './standardUsers/profileForm/Form';
import EditProfile from './standardUsers/profileForm/EditProfile';
import { MDBAlert } from 'mdbreact';

class ConnectedApp extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { message, type } = this.props;
    return (
      <div>
        {message && type === "alert-danger" ? <MDBAlert color="danger">{message}</MDBAlert> : <p></p>}
        {message && type === "alert-success" ? <MDBAlert color="success">{message}</MDBAlert> : <p></p>}
        <Router history={history}>
          <div className="App">
            <main className="content">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/user"
                  render={( { match }) => (
                    <>
                    <UserNav />
                    <Route exact path={`${match.url}/index`} component={UserApp} />
                    <Route exact path={`${match.url}/sign_in`} component={SignIn} />
                    <Route exact path={`${match.url}/register`} component={Register} />
                    <Route exact path={`${match.url}/browse`} component={Browse} />
                    <Route exact path={`${match.url}/profile`} component={UserProfile} />
                    <Route exact path={`${match.url}/add_profile`} component={Form} />
                    <Route exact path={`${match.url}/edit_profile`} component={EditProfile} />
                    <Route exact path={`${match.url}/favorites`} component={Favorites} />
                    </>
                  )} />
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { message, type } = state.alert;
  return {
    message,
    type
  };
}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
