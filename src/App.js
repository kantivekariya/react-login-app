import React from 'react';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

class App extends React.Component {
  render() {
    return (
          <div>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
          </div>
    );
  }
}

export default App;
