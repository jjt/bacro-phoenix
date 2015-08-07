import React from 'react';
import {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class AppLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className="App-layout">
        <header className="App-header">
          <div className="container">
            <h2>BACRO</h2>
            <Link to="/game/testo">TESTO</Link>
            <a href="/logout">Logout</a>
          </div>
        </header>
        <div className="App-contents">
          {this.props.children}
        </div>
      </div>
    );
  }
}
