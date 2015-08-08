import xr from 'xr';
import { createAction } from 'redux-actions';
import { TEST_JSON } from '../constants/ActionTypes';

const testJson = createAction(TEST_JSON, async id => {
  const result = await xr.get('/api/test');
  console.log(result);
});

export { testJson }
