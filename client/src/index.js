import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/common.scss';
import App from './App';
import { Provider } from 'react-redux';
import configStore from './redux/configStore';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
const store = configStore(history);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement,
  );
} else {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement,
  );
}
