import React, { Component, PropTypes } from 'react';

import ChatItem from './ChatItem';

export default class ChatList extends Component {
  static propTypes = {
    chats: PropTypes.array.isRequired,
  };

  static defaultProps = {
    chats: [],
  };

  render() {
    return (
      <div>
        {this.props.chats.map(chat => <ChatItem {...chat}/>)}
      </div>
    );
  }
}
