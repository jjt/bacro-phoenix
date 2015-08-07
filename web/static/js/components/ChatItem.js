import React, {Component, PropTypes} from 'react';

import shortTime from '../utils/shortTime';

export default class ChatItem extends Component {
  static propTypes = {
    msg: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
  };

  render() {
    const {msg, user, time} = this.props;

    return (
      <div className="ChatItem">
        <div className="ChatItem-header">
          <em>{shortTime(time)}</em> <strong>{user}</strong>: {msg}
        </div>
      </div>
    );
  }
}
