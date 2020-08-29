import { combineReducers } from 'redux';
import modal from './modal';
import auth from './user';
import mailCheck from './mailCheck';

export default combineReducers({ modal, auth, mailCheck });
