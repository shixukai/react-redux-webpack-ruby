import { createStore, applyMiddleware } from 'redux';
import HistoryMiddleware from '../middlewares/HistoryMiddleware';
import rootReducer from 'reducers';

export default function configureStore(initState) {
  const store = createStore(rootReducer, initState,
    applyMiddleware(HistoryMiddleware)
  );

  return store;
}
