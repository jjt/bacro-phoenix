import React, { Component } from 'react';
import ChatContainer from '../containers/ChatContainer';

export default class LobbyLayout extends Component {
  render() {
    return (
      <div className="LobbyLayout">
        <div className="container">
          <ChatContainer channel="lobby"/>
        </div>
      </div>
    );
  }
}
