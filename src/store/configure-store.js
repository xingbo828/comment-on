import Immutable from 'immutable';
import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';


const middlewares = [];
middlewares.push(applyMiddleware(thunk));
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    stateTransformer: state => Immutable.Iterable.isIterable(state) ? state.toJS() : state
  });
  middlewares.push(applyMiddleware(logger));
  middlewares.push(window.devToolsExtension ? window.devToolsExtension() : f => f);
}


const enhancers = compose(
  ...middlewares
);

export default initialState => createStore(rootReducer, initialState, enhancers);
