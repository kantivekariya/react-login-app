import React from 'react';
import { PrivateRoute } from './shared/_helpers/_private_route';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import Register from './components/Register/Register';
import  Home  from './components/Home/Home';
import Login from './components/Login/Login';

class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
