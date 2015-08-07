import React, { Component, PropTypes } from 'react';
import ChatList from './ChatList';
import ChatInput from './ChatInput';

export default class Chat extends Component {
  static propTypes = {
    chats: PropTypes.array.isRequired,
    onChatSubmit: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <ChatList chats={this.props.chats}/>
        <ChatInput onChatSubmit={this.props.onChatSubmit}/>
      </div>
    );
  }
}
