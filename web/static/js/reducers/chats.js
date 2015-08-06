import * as types from '../constants/ActionTypes';

const initialState = [
  {
    msg: 'Hey, this is a chat window',
    user: 'BACRO',
    time: 1438875060389,
  },
];

export default function chats(state = initialState, action) {
  switch (action.type) {
    case types.SEND_CHAT:
      return [
        {
          msg: action.msg,
          user: action.user,
          time: new Date().getTime(),
        },
        ...state,
      ];

    default:
      return state;
  }
}
