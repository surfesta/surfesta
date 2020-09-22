import { takeEvery, put, delay, call, takeLatest } from 'redux-saga/effects';
import UserService from '../../services/UserService';
import { offModal, setSignInModal } from './modal';
import { checkStart, checkSuccess, checkFail } from './mailCheck';

const prefix = 'surfesta-login';
const userPrefix = 'surfesta-user';
// action type
const START = `${prefix}/START`;
const SUCCESS = `${prefix}/SUCCESS`;
const FAIL = `${prefix}/FAIL`;
const PATCH_START = `${userPrefix}/PATCH_START`;
const PATCH_SUCCESS = `${userPrefix}/PATCH_SUCCESS`;
const PATCH_FAIL = `${userPrefix}/PATCH_FAIL`;
const TOGGLE_ENLISTED_EVENT_SUCCESS = `${userPrefix}/TOGGLE_ENLISTED_EVENT_SUCCESS`;
const TOGGLE_LIKED_EVENT_SUCCESS = `${userPrefix}/TOGGLE_LIKED_EVENT_SUCCESS`;
const DELETE_HOSTING_SUCCESS = `${prefix}/DELETE_EVENT_SUCCESS`;
const TOGGLE_FAIL = `${userPrefix}/TOGGLE_FAIL`;

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

const patchStart = () => ({
  type: PATCH_START,
});

const patchSuccess = (user) => ({
  type: PATCH_SUCCESS,
  user,
});
const patchFail = (error) => ({
  type: PATCH_FAIL,
  error,
});

const toggleEnlistedEventSuccess = (user) => ({
  type: TOGGLE_ENLISTED_EVENT_SUCCESS,
  user,
});
const toggleLikedEventSuccess = (user) => ({
  type: TOGGLE_LIKED_EVENT_SUCCESS,
  user,
});

const addFail = (error) => ({
  type: TOGGLE_FAIL,
  error,
});
const deleteHostingSuccess = (users) => ({
  type: DELETE_HOSTING_SUCCESS,
  users,
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
        error: null,
      };
    case PATCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        user: action.user,
        error: null,
      };
    case PATCH_SUCCESS:
      return {
        loading: false,
        user: action.user,
        error: null,
      };
    case TOGGLE_ENLISTED_EVENT_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case TOGGLE_LIKED_EVENT_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case TOGGLE_FAIL:
      return {
        loading: false,
        user: null,
        error: action.error,
      };
    case FAIL:
      return {
        loading: false,
        user: null,
        error: action.error,
      };
    case DELETE_HOSTING_SUCCESS:
      return {
        ...state,
        user: action.users,
      };
    case PATCH_FAIL:
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
const TOGGLE_ENLISTED_EVENT = `${userPrefix}/TOGGLE_ENLISTED_EVENT`;
const TOGGLE_LIKED_EVENT = `${userPrefix}/TOGGLE_LIKED_EVENT`;
const START_DELETE_HOSTING = `${prefix}/START_DELETE_HOSTING`;
const PATCH_USER = `${userPrefix}/PATCH_USER`;

export const cookieCheckSagaActionCreator = () => ({
  type: START_COOKIE_CHECK_SAGA,
});
export const loginSagaActionCreator = (values, setHasLoginFailed) => ({
  type: START_LOGIN_SAGA,
  payload: {
    email: values.email,
    password: values.password,
    setHasLoginFailed,
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

export const toggleEnlistedEvent = (eventId, userId, type) => ({
  type: TOGGLE_ENLISTED_EVENT,
  payload: {
    eventId,
    userId,
    type,
  },
});
export const toggleLikedEvent = (eventId, userId, type) => ({
  type: TOGGLE_LIKED_EVENT,
  payload: {
    eventId,
    userId,
    type,
  },
});
export const deleteHosting = (eventId, userId, type) => ({
  type: START_DELETE_HOSTING,
  payload: {
    eventId,
    userId,
    type,
  },
});

export const patchUserActionCreator = (
  username,
  phone_number,
  profile_img,
) => ({
  type: PATCH_USER,
  payload: {
    username,
    phone_number,
    profile_img,
  },
});

//saga-reducer
function* cookieCheckSaga() {
  try {
    yield put(loginStart());
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
    const { loginResult, user } = yield call(UserService.login, action.payload);
    if (!loginResult) {
      action.payload.setHasLoginFailed(true);
      throw new Error();
    }

    yield put(loginSuccess(user));
    yield put(offModal());
  } catch (error) {
    console.log(error);
    yield put(loginFail({ error }));
  }
}

function* signupSaga(action) {
  try {
    yield put(loginStart());
    const { success, newUser } = yield call(
      UserService.register,
      action.payload,
    );
    if (!success) throw new Error();
    const { loginResult, user } = yield call(UserService.login, action.payload);
    if (!loginResult) throw new Error();
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
      action.payload,
    );
    if (!success) throw new Error();
    const { user } = yield call(UserService.login, action.payload);
    if (!user) throw new Error();
    yield put(loginSuccess(user));
    yield put(offModal());
  }
}

// toggle enlisted event in user
function* toggleEnlistedEventSaga(action) {
  try {
    const { user } = yield call(
      UserService.toggleEnlistedEvent,
      action.payload,
    );
    yield put(toggleEnlistedEventSuccess(user));
  } catch (error) {
    yield put(addFail(error));
  }
}

// toggle liked event in user
function* toggleLikedEventSaga(action) {
  try {
    const { user } = yield call(UserService.toggleLikedEvent, action.payload);
    yield put(toggleLikedEventSuccess(user));
  } catch (error) {
    yield put(addFail(error));
  }
}
function* startDeleteHostingSaga(action) {
  try {
    const { user } = yield call(UserService.toggleHostingEvent, action.payload);
    yield put(deleteHostingSuccess(user));
  } catch (error) {
    yield put(addFail(error));
  }
}

function* patchUserSaga(action) {
  try {
    yield put(patchStart());
    const { user } = yield call(UserService.patchUser, action.payload);
    if (!user) throw new Error('No user');
    yield put(patchSuccess(user));
  } catch (error) {
    yield put(patchFail(error));
  }
}

export function* authSaga() {
  yield takeEvery(START_COOKIE_CHECK_SAGA, cookieCheckSaga);
  yield takeEvery(START_LOGIN_SAGA, loginSaga);
  yield takeEvery(START_SOCIAL_SDK_LOGIN, socialLoginSaga);
  yield takeEvery(SIGN_UP_SAGA, signupSaga);
  yield takeLatest(TOGGLE_ENLISTED_EVENT, toggleEnlistedEventSaga);
  yield takeLatest(TOGGLE_LIKED_EVENT, toggleLikedEventSaga);
  yield takeEvery(START_DELETE_HOSTING, startDeleteHostingSaga);
  yield takeLatest(PATCH_USER, patchUserSaga);
}
