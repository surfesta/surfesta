import { put, delay, call, takeEvery } from 'redux-saga/effects';
import EventService from '../../services/EventService';

const prefix = 'surfesta-events';

// action type
const START = `${prefix}/START`;
const SUCCESS = `${prefix}/SUCCESS`;
const ADD_EVENT_SUCCESS = `${prefix}/ADD_EVENT_SUCCESS`;
const TOGGLE_LIKED_USER_SUCCESS = `${prefix}/TOGGLE_LIKED_USER_SUCCESS`;
const FAIL = `${prefix}/FAIL`;

// action creator
export const start = () => ({
  type: START,
});

export const success = (events) => ({
  type: SUCCESS,
  events,
});

export const addEventSuccess = (event) => ({
  type: ADD_EVENT_SUCCESS,
  event,
});

const toggleLikedUserSuccess = (event) => ({
  type: TOGGLE_LIKED_USER_SUCCESS,
  event,
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
};

// reducer
export default function reducer(state = initialState, action) {
  // console.log(action.event);

  const eventId = action.event && action.event._id;
  const events = [...state.events].map((event) =>
    event._id === eventId ? action.event : event
  );

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
        events: action.events,
        loading: false,
        error: null,
      };
    case ADD_EVENT_SUCCESS:
      return {
        ...state,
        events,
      };
    case TOGGLE_LIKED_USER_SUCCESS:
      return {
        ...state,
        events,
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
const ADD_ENLISTED_USER = `${prefix}/ADD_ENLISTED_USER`;
const TOGGLE_LIKED_USER = `${prefix}/TOGGLE_LIKED_USER`;

export const startGetEvents = () => ({
  type: START_GET_EVENTS,
});

export const addEnlistedUser = (eventId, userId, type) => ({
  type: ADD_ENLISTED_USER,
  payload: {
    eventId,
    userId,
    type,
  },
});

export const toggleLikedUser = (eventId, userId, type) => ({
  type: TOGGLE_LIKED_USER,
  payload: {
    eventId,
    userId,
    type,
  },
});

//saga-reducer
function* startGetEventsSaga() {
  try {
    yield put(start());
    const events = yield call(EventService.getEvents);
    yield put(success(events));
  } catch (error) {
    yield put(fail(error));
  }
}

function* addEnlistedUserSaga(action) {
  try {
    const { event } = yield call(EventService.addEnlistedUser, action.payload);
    yield put(addEventSuccess(event));
  } catch (error) {
    yield put(fail(error));
  }
}

function* toggleLikedUserSaga(action) {
  try {
    const { event } = yield call(EventService.toggleLikedUser, action.payload);
    yield put(toggleLikedUserSuccess(event));
  } catch (error) {
    yield put(fail(error));
  }
}

export function* eventsSaga() {
  yield takeEvery(START_GET_EVENTS, startGetEventsSaga);
  yield takeEvery(ADD_ENLISTED_USER, addEnlistedUserSaga);
  yield takeEvery(TOGGLE_LIKED_USER, toggleLikedUserSaga);
}
