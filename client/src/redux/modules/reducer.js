import { combineReducers } from 'redux';
import modal from './modal';
import auth from './auth';
import mailCheck from './mailCheck';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    modal,
    auth,
    mailCheck,
    router: connectRouter(history),
  });
export default rootReducer;
