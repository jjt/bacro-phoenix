import React, { Component, PropTypes } from 'react';
import ChatList from './ChatList';
import ChatInput from './ChatInput';

export default class Chat extends Component {
  static propTypes = {
    chats: PropTypes.array.isRequired,
    onChat: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <ChatList chats={this.props.chats}/>
        <ChatInput onChat={this.props.onChat}/>
      </div>
    );
  }
}
