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
  message: null,
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
        message: action.message,
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
const START_START_TOGGLE_FAVORITE = `${prefix}/START_TOGGLE_FAVORITE`;

export const startGetEvents = () => ({
  type: START_GET_EVENTS,
});
export const startToggleFavorite = (eventId, favUserIds) => ({
  type: START_START_TOGGLE_FAVORITE,
  payload: {
    eventId,
    liked_users: favUserIds,
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
function* startToggleFavoriteSaga(action) {
  try {
    const message = yield call(EventService.toggleFavorite, action.payload);
    yield put(successToggle(message));
  } catch (error) {
    yield put(fail(error));
  }
}

export function* eventsSaga() {
  yield takeEvery(START_GET_EVENTS, startGetEventsSaga);
  yield takeEvery(START_START_TOGGLE_FAVORITE, startToggleFavoriteSaga);
}
