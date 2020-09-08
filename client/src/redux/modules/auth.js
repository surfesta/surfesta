import { takeEvery, put, delay, call, takeLatest } from 'redux-saga/effects';
import UserService from '../../services/UserService';
import { offModal, setSignInModal } from './modal';
import { checkStart, checkSuccess, checkFail } from './mailCheck';

const prefix = 'surfesta-login';
// action type
const START = `${prefix}/START`;
const SUCCESS = `${prefix}/SUCCESS`;
const FAIL = `${prefix}/FAIL`;

// action creator
const loginStart = () => ({
  type: START,
});
const loginSuccess = (user) => ({
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
const START_SOCIAL_SDK_LOGIN = 'START_SOCIAL_SDK_LOGIN';

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

export const signupSagaActionCreator = (user) => ({
  type: SIGN_UP_SAGA,
  payload: user,
});

export const startSocialSDKLogin = (user) => ({
  type: START_SOCIAL_SDK_LOGIN,
  payload: user,
});

//saga-reducer
function* cookieCheckSaga() {
  try {
    yield put(loginStart());
    yield delay(300);
    const { isAuth, user } = yield call(UserService.authenticate);
    if (!isAuth) throw new Error();
    yield put(loginSuccess(user));
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
    yield put(loginSuccess(user));
    yield put(offModal());
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* signupSaga(action) {
  try {
    yield put(loginStart());
    yield delay(300);
    const { success, newuser } = yield call(
      UserService.register,
      action.payload
    );
    if (!success) throw new Error();
    const { loginSuccess, user } = yield call(
      UserService.login,
      action.payload
    );
    if (!loginSuccess) throw new Error();
    yield put(loginSuccess(user));
    yield put(offModal());
  } catch (error) {
    yield put(loginFail(error));
  }
}

//facebook, google
function* socialLoginSaga(action) {
  try {
    yield put(checkStart());
    const { data, email } = yield call(UserService.checkEmail, action.payload);
    if (!data.emailCheck) throw new Error();
    yield put(checkSuccess(email));
    try {
      yield put(loginStart());
      const { user } = yield call(UserService.login, action.payload);
      if (!user) throw new Error();
      yield put(loginSuccess(user));
      yield put(offModal());
    } catch (error) {
      yield put(loginFail(error));
      throw new Error();
    }
  } catch (error) {
    yield put(checkFail());
    const { success, newuser } = yield call(
      UserService.register,
      action.payload
    );
    if (!success) throw new Error();
    const { user } = yield call(UserService.login, action.payload);
    if (!user) throw new Error();
    yield put(loginSuccess(user));
    yield put(offModal());
  }
}

export function* authSaga() {
  yield takeEvery(START_COOKIE_CHECK_SAGA, cookieCheckSaga);
  yield takeEvery(START_LOGIN_SAGA, loginSaga);
  yield takeEvery(START_SOCIAL_SDK_LOGIN, socialLoginSaga);
  yield takeEvery(SIGN_UP_SAGA, signupSaga);
}
