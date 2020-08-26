import { createStore, applyMiddleware } from 'redux';
import reducer from './modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const configStore = () => {
  const store = createStore(reducer, composeWithDevTools(applyMiddleware()));
  return store;
};
