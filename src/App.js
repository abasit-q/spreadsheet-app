import React, { Component } from 'react';
import LoginContainer from './containers/Login';
import SignupContainer from './containers/Signup';
import SpreadSheetContainer from './containers/SpreadSheet';
import { Router, Route, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Router history={history}>
          <div className="site-wrapper">
            <Route path="/" exact render={() => {
              return <Redirect to="/signin" />;
            }}/>
            <Route path="/signin" component={LoginContainer}/>
            <Route path="/signup" component={SignupContainer}/>
            <Route path="/spreadsheet" component={SpreadSheetContainer}/>
          </div>
        </Router>
    );
  }
}

export default App;
