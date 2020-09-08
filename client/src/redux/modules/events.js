import { put, delay, call, takeEvery } from 'redux-saga/effects';
import EventService from '../../services/EventService';

const prefix = 'surfesta-events';

// action type
const START = `${prefix}/START`;
const SUCCESS = `${prefix}/SUCCESS`;
const SUCCESSTOGGLE = `${prefix}/SUCCESSTOGGLE`;
const FAIL = `${prefix}/FAIL`;

// action creator
export const start = () => ({
  type: START,
});

export const success = (events) => ({
  type: SUCCESS,
  events,
});

export const successToggle = (message) => ({
  type: SUCCESSTOGGLE,
  message,
});

export const fail = (error) => ({
  type: FAIL,
  error,
});

// initial state
const initialState = {
  events: [],
  loading: false,
  error: null,
  user: [],
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
        events: action.events,
        loading: false,
        error: null,
      };
    case SUCCESSTOGGLE:
      return {
        ...state,
        user: action.user,
      };
    case FAIL:
      return {
        events: [],
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}

//saga-action
const START_GET_EVENTS = `${prefix}/START_GET_EVENTS`;
const START_START_TOGGLE_FAV_IN_EVENT = `${prefix}/START_TOGGLE_FAV_IN_EVENT`;
const START_START_TOGGLE_FAV_IN_USER = `${prefix}/START_TOGGLE_FAV_IN_USER`;

export const startGetEvents = () => ({
  type: START_GET_EVENTS,
});
export const startToggleFavInEvent = (eventId, favUserIds) => ({
  type: START_START_TOGGLE_FAV_IN_EVENT,
  payload: {
    eventId,
    liked_users: favUserIds,
  },
});
export const startToggleFavInUser = (userId, favEventIds) => ({
  type: START_START_TOGGLE_FAV_IN_USER,
  payload: {
    userId,
    liked_events: favEventIds,
  },
});

//saga-reducer
function* startGetEventsSaga() {
  try {
    yield put(start());
    yield delay(100);
    const events = yield call(EventService.getEvents);
    yield put(success(events));
  } catch (error) {
    yield put(fail(error));
  }
}
function* startToggleFavInEventSaga(action) {
  try {
    const user = yield call(EventService.toggleFavInEvent, action.payload);
    yield put(successToggle(user));
  } catch (error) {
    yield put(fail(error));
  }
}
function* startToggleFavInUserSaga(action) {
  try {
    const user = yield call(EventService.toggleFavInUser, action.payload);
    yield put(successToggle(user));
  } catch (error) {
    yield put(fail(error));
  }
}

export function* eventsSaga() {
  yield takeEvery(START_GET_EVENTS, startGetEventsSaga);
  yield takeEvery(START_START_TOGGLE_FAV_IN_EVENT, startToggleFavInEventSaga);
  yield takeEvery(START_START_TOGGLE_FAV_IN_USER, startToggleFavInUserSaga);
}
