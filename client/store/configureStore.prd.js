import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from 'reducers';

const middleware = routerMiddleware(browserHistory);

export default function configureStore(initState) {
  const store = createStore(rootReducer, initState,
    applyMiddleware(middleware)
  );

  return store;
}
