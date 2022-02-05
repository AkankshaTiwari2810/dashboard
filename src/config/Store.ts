import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import AppReducer from '../reducers/AppReducer';
import { ApplicationState } from './../config/Interfaces';

export default function configureStore(initialState: ApplicationState) {
  const store = createStore(
    AppReducer, // root reducer with router state
    initialState,
    applyMiddleware(logger)
  );
  return store;
}
