import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import promiseMiddleware from 'redux-promise';

import * as reducers from './reducers';
import { socketConnect } from './actions/ChatActions';

import AppLayout from './components/AppLayout';
import GameLayout from './components/GameLayout';
import LobbyLayout from './components/LobbyLayout';

import 'css/app.css';

const reducer = combineReducers(reducers);
const store = applyMiddleware(promiseMiddleware)(createStore)(reducer);

store.dispatch(socketConnect());

const provider = (
  <Provider store={store}>
    {() => (
      <Router history={history}>
        <Route component={AppLayout}>
          <Route path="/" component={LobbyLayout} />
          <Route path="/game/:gameId" component={GameLayout} />
        </Route>
      </Router>
    )}
  </Provider>
);

React.render(provider, document.getElementById('app'));

export default provider;
