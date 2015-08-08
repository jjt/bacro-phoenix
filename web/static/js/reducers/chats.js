import { pick } from 'lodash';

import * as types from '../constants/ActionTypes';

const initialState = [
  {
    data: {
      msg: 'Hey, this is a chat window',
      user: 'BACRO',
      time: 1438875060389,
    },
    meta: {},
  },
];

export default function chats(state = initialState, action) {
  switch (action.type) {
    case types.SEND_CHAT:
      return [
        ...state,
        pick(action.payload, ['data', 'meta']),
      ];

    default:
      return state;
  }
}
