import { put, delay, call, takeEvery } from 'redux-saga/effects';
import UserService from '../../services/UserService';
import EventService from '../../services/EventService';

const prefix = 'surfesta-user';

// action type
const START = `${prefix}/START`;
const SUCCESS = `${prefix}/SUCCESS`;
const FAIL = `${prefix}/FAIL`;

// action creator
export const start = () => ({
  type: START,
});

export const success = (user) => ({
  type: SUCCESS,
  user,
});

export const fail = (error) => ({
  type: FAIL,
  error,
});

// initial state
const initialState = {
  user: null,
  loading: false,
  error: null,
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
    case SUCCESS:
      return {
        user: action.user,
        loading: false,
        error: null,
      };
    case FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}

//saga-action
const START_GET_USER = `${prefix}/START_GET_USER`;
const START_START_TOGGLE_FAV_IN_USER = `${prefix}/START_TOGGLE_FAV_IN_USER`;

export const startGetUser = (userId) => ({
  type: START_GET_USER,
  payload: {
    userId,
  },
});

export const startToggleFavInUser = (userId, likedEventIds) => ({
  type: START_START_TOGGLE_FAV_IN_USER,
  payload: {
    userId,
    liked_events: likedEventIds,
  },
});

//saga-reducer
function* startGetUserSaga(action) {
  try {
    yield put(start());
    yield delay(100);
    const user = yield call(UserService.getUser, action.payload);
    yield put(success(user));
  } catch (error) {
    yield put(fail(error));
  }
}
function* startToggleFavInUserSaga(action) {
  try {
    yield put(start());
    let { user } = yield call(EventService.toggleFavInUser, action.payload);
    yield put(success(user));

    // user = yield call(UserService.getUser, action.payload);
    // yield put(success(user));
  } catch (error) {
    yield put(fail(error));
  }
}

export function* userSaga() {
  yield takeEvery(START_GET_USER, startGetUserSaga);
  yield takeEvery(START_START_TOGGLE_FAV_IN_USER, startToggleFavInUserSaga);
}
