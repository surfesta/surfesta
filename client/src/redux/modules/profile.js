import { put, call, takeEvery } from 'redux-saga/effects';
import UserService from '../../services/UserService';

const prefix = 'surfesta-user';

// action type ----------------------------------------------------------
const START = `${prefix}/START`;
const SUCCESS = `${prefix}/SUCCESS`;
const FAIL = `${prefix}/FAIL`;

// action creator -------------------------------------------------------
export const usersStartAction = () => ({
  type: START,
});

export const usersSuccessAction = (username, phone_number) => ({
  type: SUCCESS,
  username,
  phone_number,
});

export const usersFailAction = (error) => ({
  type: FAIL,
  error,
});

// initial state -------------------------------------------------------
const initialState = {
  username: '',
  phone_number: '',
  loading: false,
  error: null,
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SUCCESS:
      return {
        ...state,
        username: action.username,
        phone_number: action.phone_number,
        loading: false,
        error: null,
      };
    case FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

// saga-action
const START_PATCH_USER = `${prefix}/START_PATCH_USER`;

// saga-action-creator
export const startPatchUser = (username, phone_number) => ({
  type: START_PATCH_USER,
  payload: {
    username,
    phone_number,
  },
});

//saga-reducer
function* startPatchUserSaga(action) {
  try {
    yield put(usersStartAction());
    const userInfo = yield call(UserService.patchUser, action.payload);
    console.log(userInfo);
    yield put(usersSuccessAction(userInfo));
  } catch (error) {
    yield put(usersFailAction(error));
  }
}

export function* userSaga() {
  yield takeEvery(START_PATCH_USER, startPatchUserSaga);
}
