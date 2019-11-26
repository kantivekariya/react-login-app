import React from 'react';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} /> 
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
