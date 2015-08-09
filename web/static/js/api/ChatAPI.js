import xr from 'xr';

import globals from '../utils/globals';

const chatRoot = '/api/chat';

export function sendMsg(data) {
  return xr.post(`${chatRoot}/msg`, {
    data: data,
  });
}
