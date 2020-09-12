import { combineReducers } from 'redux';
import modal from './modal';
import auth from './auth';
import mailCheck from './mailCheck';
import events from './events';
import profile from './profile';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    modal,
    auth,
    mailCheck,
    events,
    profile,
    router: connectRouter(history),
  });
export default rootReducer;
