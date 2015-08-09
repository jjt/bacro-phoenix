import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { joinChannel, sendChat } from '../actions/ChatActions';
import ChatContainer from '../containers/ChatContainer';

@connect(state => {
  return {
    chats: state.chats,
    socket: state.socket
  };
})
export default class LobbyLayout extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    chats: PropTypes.array.isRequired,
    socket: PropTypes.object.isRequired,
  }

  componentDidMount = () => {
    this.props.dispatch(joinChannel({
      socket: this.props.socket.socket,
      channel: 'lobby',
    }));
  }

  onChat = (msg) => {
    this.props.dispatch(sendChat({
      msg: msg,
      channel: this.props.socket.channel,
    }));
  }

  render() {
    console.log(this.props);
    return (
      <div className="LobbyLayout">
        <div className="container">
          <ChatContainer
            channel="lobby"
            chats={this.props.chats}
            onChat={this.onChat}
          />
        </div>
      </div>
    );
  }
}
