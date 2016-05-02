import { createReducer } from 'redux-immutablejs';
import actionTypes from 'constants/constants'
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  isAuth: false
});

export default createReducer(initialState, {
  [actionTypes.LONGIN_REQUEST]: (state, action) => state.merge({
  }),
  [actionTypes.LOGIN_SUCCESS]: (state, action) => state.merge({
    isAuth: true,
  })
})
