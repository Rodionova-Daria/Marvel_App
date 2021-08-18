import React from 'react';
import ReactDOM from 'react-dom';
import App from './commponents/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';
import createsagaMiddleware from 'redux-saga';
import { rootWatcher } from './redux/sagas';

const saga = createsagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(rootWatcher);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
