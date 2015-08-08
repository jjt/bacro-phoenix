import React, { Component, PropTypes } from 'react';
import findDOMNode from 'react/lib/findDOMNode';

export default class ChatInput extends Component {
  static propTypes = {
    onChatSubmit: PropTypes.func.isRequired,
    onChat: PropTypes.func.isRequired,
  };

  onChatSubmit = (e, ...rest) => {
    const $msg = findDOMNode(this.refs.msg);
    e.preventDefault();
    this.props.onChat($msg.value);
    $msg.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onChatSubmit}>
          <input ref="msg" type="text" placeholder="SPEAK!"/>
        </form>
      </div>
    );
  }
}
