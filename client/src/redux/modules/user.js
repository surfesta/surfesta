import { takeEvery, put, delay, call } from 'redux-saga/effects';
import UserService from '../../services/UserService';

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
const START_LOGIN_SAGA = 'START_LOGIN_SAGA';
const START_LOGOUT_SAGA = 'START_LOGOUT_SAGA';
// const START_AUTHENTICATE_SAGA = 'START_AUTHEN_SAGA';

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

//saga-reducer
function* loginSaga(action) {
  try {
    yield put(loginStart());
    yield delay(300);
    const { user } = yield call(UserService.login, action.payload);
    console.log(user);
    yield put(loginSucess(user));
  } catch (error) {
    yield put(loginFail(error));
  }
}

// function* logoutSaga() {
//   UserService.logout();
// }

export function* userSaga() {
  yield takeEvery(START_LOGIN_SAGA, loginSaga);
}
