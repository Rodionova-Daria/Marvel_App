import React, { Component } from 'react';
import Comics from './Comics';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageNotFound } from './PageNotFound';
import MarvelHome from './MarvelHome';

class App extends Component {
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" exact component={MarvelHome} />
            <Route path="/comics/:id" component={Comics} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
