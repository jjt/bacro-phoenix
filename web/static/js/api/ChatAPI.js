import xr from 'xr';

import globals from '../utils/globals';

const chatRoot = '/api/chat';

export function sendMsg(msg) {
  return xr.post(`${chatRoot}/msg`, {
    data: {
      type: 'msg',
      msg: msg,
      user: globals.user
    },
  });
}
