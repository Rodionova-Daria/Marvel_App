import React, { Component } from 'react';
import Commics from './Commics';
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
            <Route path="/commics/:id" component={Commics} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
