import React from 'react';
import { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <h2>BACRO</h2>
        <div>OHAI THERE</div>
        <Link to="/game/testo">TESTO</Link>
        <div className="App-contents">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
