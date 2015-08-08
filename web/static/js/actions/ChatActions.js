import { createAction } from 'redux-actions';

import { sendMsg } from '../api/ChatAPI';
import { SEND_CHAT } from '../constants/ActionTypes';

const sendChat = createAction(SEND_CHAT, msg => {
  console.log('msg', msg);
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

export { sendChat }

// export function sendChat(msg) {
//   return {
//     ...msg,
//     user: 'USERNAME',
//     time: new Date().getTime(),
//     type: types.SEND_CHAT,
//   };
// }
