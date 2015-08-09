import React, { Component, PropTypes } from 'react';

import Chat from '../components/Chat';

export default class ChatContainer extends Component {
  static propTypes = {
    chats: PropTypes.array,
  }

  static defaultProps = {
    chats: [],
  }

  render() {
    return (
      <div>
        <Chat
          chats={this.props.chats}
          onChat={this.props.onChat}
        />
      </div>
    );
  }
}
