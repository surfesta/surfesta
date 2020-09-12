import { createStore, applyMiddleware } from 'redux';
import reducer from './modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './middlewares/saga';
import { routerMiddleware } from 'connected-react-router';

const sagaMiddleware = createSagaMiddleware();

const configStore = (history) => {
  const store = createStore(
    reducer(history),
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configStore;
