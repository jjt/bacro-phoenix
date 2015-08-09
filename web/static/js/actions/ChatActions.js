import { createAction } from 'redux-actions';

import {
  SEND_CHAT,
  SOCKET_CONNECT,
  JOIN_CHANNEL,
  VALIDATE_CHAT,
} from '../constants/ActionTypes';

// export const sendChat = createAction(SEND_CHAT, sendMsg);
export const sendChat = createAction(SEND_CHAT, msg => {
  console.log(msg);
  return;
});
export const socketConnect = createAction(SOCKET_CONNECT, () => {
  return {
    socket: 'connect',
  };
});
export const joinChannel = createAction(JOIN_CHANNEL, channel => {
  return {
    channel: channel,
  };
});






// TODO: Optimistic actions
const sendChatOptimisic = createAction(SEND_CHAT, msg => {
  // Send the request before returning optimistic chat
  setTimeout(sendMsg.bind(null, msg), 1000);
  return {
    data: {
      ...msg,
      user: 'USERNAME',
      time: new Date().getTime(),
    },
    meta: {
      provisional: true,
    },
  };
});

// Mark a chat as valid
const validateChat = createAction(VALIDATE_CHAT, thing => {
  return {
    data: {},
    meta: {},
  }
});
