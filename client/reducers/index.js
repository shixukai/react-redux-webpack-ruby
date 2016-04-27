import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  routing,
});

export default rootReducer;
