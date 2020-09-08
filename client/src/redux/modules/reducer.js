import { combineReducers } from 'redux';
import modal from './modal';
import auth from './auth';
import mailCheck from './mailCheck';
import events from './events';
import user from './user';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    modal,
    auth,
    mailCheck,
    events,
    user,
    router: connectRouter(history),
  });
export default rootReducer;
