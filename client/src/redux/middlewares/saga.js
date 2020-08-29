import { all } from 'redux-saga/effects';
import { userSaga } from '../modules/user';
import { checkMailSaga } from '../modules/mailCheck';

export default function* rootSaga() {
  yield all([userSaga(), checkMailSaga()]);
}
