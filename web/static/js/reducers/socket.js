import { pick } from 'lodash';

import * as types from '../constants/ActionTypes';

const initialState = {
  socket: null,
  chan: null,
};

export default function socket(state = initialState, action) {
  switch (action.type) {
    case types.SOCKET_CONNECT:
      return {
        ...state,
        socket: action.payload.socket,
      };

    case types.JOIN_CHANNEL:
      return {
        ...state,
        channel: action.payload.channel
      };

    default:
      return state;
  }
}
