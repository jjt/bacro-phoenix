import { createAction } from 'redux-actions';

import { sendMsg } from '../api/ChatAPI';

import {
  SEND_CHAT,
  VALIDATE_CHAT,
} from '../constants/ActionTypes';

export const sendChat = createAction(SEND_CHAT, sendMsg);






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
