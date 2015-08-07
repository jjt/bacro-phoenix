import React, { Component, PropTypes } from 'react';

export default class ChatItem extends Component {
  static propTypes = {
    msg: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
  };

  render() {
    const { msg, user, time } = this.props;

    return (
      <div>
        <strong>{user}</strong> at <em>{time}</em>:
        {msg}
      </div>
    );
  }
}
