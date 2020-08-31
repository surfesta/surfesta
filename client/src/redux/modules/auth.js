import { takeEvery, put, delay, call } from 'redux-saga/effects';
import UserService from '../../services/UserService';
import { offModal } from './modal';

const prefix = 'surfesta-login';
// action type
const START = `${prefix}/START`;
const SUCCESS = `${prefix}/SUCCESS`;
const FAIL = `${prefix}/FAIL`;

// action creator
const loginStart = () => ({
  type: START,
});
const loginSucess = (user) => ({
  type: SUCCESS,
  user,
});
const loginFail = (error) => ({
  type: FAIL,
  error,
});

// initial state
const initialState = {
  loading: false,
  error: null,
  user: null,
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS:
      return {
        loading: false,
        user: action.user,
        error: null,
      };
    case FAIL:
      return {
        loading: false,
        user: null,
        error: action.error,
      };
    default:
      return state;
  }
}

//saga-action
const START_COOKIE_CHECK_SAGA = 'START_COOKIE_CHECK_SAGA';
const START_LOGIN_SAGA = 'START_LOGIN_SAGA';
const START_LOGOUT_SAGA = 'START_LOGOUT_SAGA';
const SIGN_UP_SAGA = 'SIGN_UP_SAGA';
// const START_AUTHENTICATE_SAGA = 'START_AUTHEN_SAGA';

export const cookieCheckSagaActionCreator = () => ({
  type: START_COOKIE_CHECK_SAGA,
});
export const loginSagaActionCreator = ({ email, password }) => ({
  type: START_LOGIN_SAGA,
  payload: {
    email,
    password,
  },
});
export const logoutSagaActionCreator = () => ({
  type: START_LOGOUT_SAGA,
});

export const SignupSagaActionCreator = (user) => ({
  type: SIGN_UP_SAGA,
  payload: user,
});

//saga-reducer
function* cookieCheckSaga(action) {
  try {
    yield put(loginStart());
    yield delay(300);
    const { isAuth, user } = yield call(UserService.authenticate);
    if (!isAuth) throw new Error();
    yield put(loginSucess(user));
  } catch (error) {
    yield put(loginFail(error));
  }
}
function* loginSaga(action) {
  try {
    yield put(loginStart());
    yield delay(300);
    const { user } = yield call(UserService.login, action.payload);
    if (!user) throw new Error();
    yield put(loginSucess(user));
    yield put(offModal());
  } catch (error) {
    yield put(loginFail(error));
  }
}
function* signupSaga(action) {
  try {
    yield put(loginStart());
    yield delay(300);
    const { success } = yield call(UserService.register, action.payload);
    if (!success) throw new Error();
    const { loginSuccess, user } = yield call(UserService.login, {
      email: action.payload.email,
      password: action.payload.password,
    });
    if (!loginSuccess) throw new Error();
    yield put(loginSucess(user));
    yield put(offModal());
  } catch (error) {
    yield put(loginFail(error));
  }
}

// function* logoutSaga() {
//   UserService.logout();
// }

export function* authSaga() {
  yield takeEvery(START_COOKIE_CHECK_SAGA, cookieCheckSaga);
  yield takeEvery(START_LOGIN_SAGA, loginSaga);
  yield takeEvery(SIGN_UP_SAGA, signupSaga);
}
