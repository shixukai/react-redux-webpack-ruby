import { createStore, applyMiddleware } from 'redux';
import HistoryMiddleware from '../middlewares/HistoryMiddleware';
import Api from '../middlewares/ApiMiddleware';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';

export default function configureStore(initState) {
  const store = createStore(rootReducer, initState,
    applyMiddleware(thunk, HistoryMiddleware, Api)
  );

  return store;
}
