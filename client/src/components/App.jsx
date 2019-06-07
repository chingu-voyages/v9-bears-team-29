import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "../helpers/history";
import { alertActions } from "../actions/alertActions";
import { Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing";

class ConnectedApp extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {
    return (
      <div>
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <div className="App">
            <main className="content">
              <Switch>
                <Route exact path="/" component={Landing} />
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
