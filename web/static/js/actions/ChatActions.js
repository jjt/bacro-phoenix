import * as types from '../constants/ActionTypes';

export function sendChat(msg) {
  return {
    ...msg,
    user: 'USERNAME',
    time: new Date().getTime(),
    type: types.SEND_CHAT,
  }
}
