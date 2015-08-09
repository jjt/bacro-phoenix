import { createAction } from 'redux-actions';
import { Socket } from '../../../../deps/phoenix/web/static/js/phoenix';

import {
  SEND_CHAT,
  SOCKET_CONNECT,
  JOIN_CHANNEL,
  VALIDATE_CHAT,
} from '../constants/ActionTypes';

// export const sendChat = createAction(SEND_CHAT, sendMsg);
export const sendChat = createAction(SEND_CHAT, obj => {
  console.log('sentChat', obj);
  obj.channel.push("msg", {msg: obj.msg});
  return;
});

export const socketConnect = createAction(SOCKET_CONNECT, () => {
  const socket = new Socket('/socket');
  socket.connect();
  return {
    socket: socket,
  };
});

export const joinChannel = createAction(JOIN_CHANNEL, args => {
  console.log('joinChannel', args);
  const channel = args.socket.channel(`rooms:${args.channel}`, {});
  
  // TODO: remove these debugging statements, find better spot for handing incoming msgs
  channel.join().receive('ok', chan => console.log(`Connected to ${args.channel}`));
  channel.on('msg', payload => console.log('MSG payload', payload));

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
