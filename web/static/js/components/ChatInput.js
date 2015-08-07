import React, { Component, PropTypes } from 'react';

export default class ChatInput extends Component {
  static propTypes = {
    onChatSubmit: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onChatSubmit}>
          <input type='text' placeholder='Say sumthin, would ya?'/>
        </form>
      </div>
    );
  }
}
