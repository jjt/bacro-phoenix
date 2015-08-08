import xr from 'xr';

const chatRoot = '/api/chat';

export function sendMsg(msg) {
  console.log('sending message');
  return xr.post(`${chatRoot}/msg`, {
    data: {
      type: 'msg',
      msg: msg,
    },
  });
}
