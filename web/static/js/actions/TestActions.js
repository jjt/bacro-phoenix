import xr from 'xr';
import { createAction } from 'redux-actions';
import { TEST_JSON } from '../constants/ActionTypes';

const testJson = createAction(TEST_JSON, async id => {
  const result = await xr.get('/api/chat/test');
  console.log(result, 'yeah');
});

export { testJson }
