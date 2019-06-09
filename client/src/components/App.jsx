import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "../helpers/history";
import { alertActions } from "../actions/alertActions";
import { Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import SignIn from './standardUsers/partials/SignIn';
import Register from './standardUsers/partials/Register';
import UserLanding from './standardUsers/UserLanding';
import Browse from './standardUsers/Browse';
import Profile from './standardUsers/Profile';
import Favorites from './standardUsers/Favorites';
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
                <Route exact path="/user/sign_in" component={SignIn} />
                <Route exact path="/user/register" component={Register} />
                <Route exact path="/user/index" component={UserLanding} /> 
                <Route exact path="/user/browse" component={Browse} />
                <Route exact path="/user/:id/profile" component={Profile} />
                <Route exact path="/user/:id/favorites" component={Favorites} />
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
