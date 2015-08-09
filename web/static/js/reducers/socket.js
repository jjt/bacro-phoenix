import { pick } from 'lodash';
import { Socket } from '../../../../deps/phoenix/web/static/js/phoenix';

import * as types from '../constants/ActionTypes';

const initialState = {
  socket: null,
  chan: null,
};

export default function socket(state = initialState, action) {
  switch (action.type) {
    case types.SOCKET_CONNECT:
      console.log('SOCKET_CONNECT');
      const socket = new Socket('/socket');
      socket.connect();
      return {
        ...state,
        socket: socket,
      };

    case types.JOIN_CHANNEL:
      return {
        ...state,
        chan: state.socket.channel(action.payload.channel, {}),
      };

    default:
      return state;
  }
}
