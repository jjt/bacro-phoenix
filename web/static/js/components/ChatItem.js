import React, { Component, PropTypes } from 'react';

import shortTime from '../utils/shortTime';

import 'css/ChatItem.css';

export default class ChatItem extends Component {
  static propTypes = {
    msg: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
  };

  render() {
    const { msg, user, time } = this.props;

    return (
      <div className="ChatItem">
        <div className="ChatItem-header">
          <span className="ChatItem-time">{shortTime(time)}</span> <strong>{user}</strong>: {msg}
        </div>
      </div>
    );
  }
}
