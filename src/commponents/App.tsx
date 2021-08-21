import React from 'react';
import Comics from './Comics';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageNotFound } from './PageNotFound';
import MarvelHome from './MarvelHome';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={MarvelHome} />
          <Route path="/commics/:id" component={Comics} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
