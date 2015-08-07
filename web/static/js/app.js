import React from 'react';
import { history } from 'react-router/lib/BrowserHistory';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import * as reducers from './reducers';

import App from './containers/App';

import Game from './components/Game';
import Lobby from './components/Lobby';

import 'css/app.css';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

const $mountNode = document.getElementById('app');

const provider = (
  <Provider store={store}>
    {() => (
      <Router history={history}>
        <Route component={App}>
          <Route path="/" component={Lobby} />
          <Route path="/game/:gameId" component={Game} />
        </Route>
      </Router>
    )}
  </Provider>
);

React.render(provider, $mountNode);

export default provider;
