import React from 'react';
import { history } from 'react-router/lib/BrowserHistory';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { batchedUpdates } from 'redux-batched-updates';
import { Router, Route } from 'react-router';

import * as reducers from './reducers';

import App from './containers/App';
import Game from './Game.js';

import 'css/app.css';

const reducer = combineReducers(reducers);
const store = batchedUpdates(createStore)(reducer);

const $mountNode = document.getElementById('app');

const provider = (
  <Provider store={store}>
    {() => (
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="/game/:gameId" component={Game} />
        </Route>
      </Router>
    )}
  </Provider>
);

React.render(provider, $mountNode);

export default provider;
