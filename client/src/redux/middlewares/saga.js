import { all } from 'redux-saga/effects';
import { authSaga } from '../modules/auth';
import { checkMailSaga } from '../modules/mailCheck';
import { eventsSaga } from '../modules/events';
import { userSaga } from '../modules/user';

export default function* rootSaga() {
  yield all([authSaga(), checkMailSaga(), eventsSaga(), userSaga()]);
}
