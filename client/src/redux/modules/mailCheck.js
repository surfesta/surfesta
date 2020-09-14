import UserService from '../../services/UserService';
import { put, call, takeEvery } from 'redux-saga/effects';
import { setSignInModal, setSignUpModal } from './modal';

const prefix = 'surfesta-mailCheck';

// action type
const START = `${prefix}/START`;
const SUCCESS = `${prefix}/SUCCESS`;
const FAIL = `${prefix}/FAIL`;

// action creator
export const checkStart = () => ({
  type: START,
});
export const checkSuccess = (email, username) => ({
  type: SUCCESS,
  email,
  username,
});
export const checkFail = (error) => ({
  type: FAIL,
  error,
});

// initial state
const initialState = {
  loading: false,
  email: '',
  error: null,
  usernmae: null,
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
        email: '',
      };
    case SUCCESS:
      return {
        loading: false,
        email: action.email,
        usernmae: action.username,
        error: '',
      };
    case FAIL:
      return {
        ...state,
        loading: false,
        email: '',
        error: action.error,
      };
    default:
      return state;
  }
}

//saga-action
const START_CHECK_SAGA = 'START_CHECK_SAGA';

export const checkSagaActionCreator = ({ email }) => ({
  type: START_CHECK_SAGA,
  payload: {
    email,
  },
});

//saga-reducer
function* checkSaga(action) {
  try {
    yield put(checkStart());
    const { data } = yield call(UserService.checkEmail, action.payload);
    if (!data.emailCheck) throw new Error();
    yield put(checkSuccess(action.payload.email, data.username));
    yield put(setSignInModal(action.payload.email, data.username));
  } catch (error) {
    yield put(checkFail(error));
    yield put(setSignUpModal(action.payload.email));
  }
}

// function* logoutSaga() {
//   UserService.logout();
// }

export function* checkMailSaga() {
  yield takeEvery(START_CHECK_SAGA, checkSaga);
}
