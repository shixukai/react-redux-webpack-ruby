import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import login from './login';

export const rootReducer = combineReducers({
  login,
  routing
});

export default rootReducer;
