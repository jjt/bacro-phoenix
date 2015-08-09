import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { sendChat } from '../actions/ChatActions';
import Chat from '../components/Chat';

@connect(state => {
  return {
    chats: state.chats,
  };
})
export default class ChatContainer extends Component {
  static propTypes = {
    chats: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
    channel: PropTypes.string.isRequired,
  }

  static defaultProps = {
    chats: [],
  }

  onChat = (msg) => {
    this.props.dispatch(sendChat({msg: msg, channel:this.props.channel}));
  }

  render() {
    return (
      <div>
        <Chat
          chats={this.props.chats}
          onChat={this.onChat}
        />
      </div>
    );
  }
}
