import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import shortTime from '../utils/shortTime';

import 'css/ChatItem.css';

export default class ChatItem extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
  };

  render() {
    const { data: { msg, user, time } } = this.props;
    const classes = classNames("ChatItem");

    return (
      <div className={classes}>
        <div className="ChatItem-header">
          <span className="ChatItem-time">{shortTime(time)}</span> <strong>{user}</strong> {msg}
        </div>
      </div>
    );
  }
}
