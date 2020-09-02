import UserService from '../../services/UserService';
import { put, delay, call, takeEvery } from 'redux-saga/effects';
import { setSignInModal, setSignUpModal } from './modal';

const prefix = 'surfesta-mailCheck';

// action type
const START = `${prefix}/START`;
const SUCCESS = `${prefix}/SUCCESS`;
const FAIL = `${prefix}/FAIL`;

// action creator
const checkStart = () => ({
  type: START,
});
const checkSuccess = (email) => ({
  type: SUCCESS,
  email,
});
const checkFail = (error) => ({
  type: FAIL,
  error,
});

// initial state
const initialState = {
  loading: false,
  email: '',
  error: null,
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
        error: '',
      };
    case FAIL:
      return {
        loading: false,
        email: '',
        error: action.email,
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
    yield delay(300);
    const { data, email } = yield call(UserService.checkEmail, action.payload);
    if (!data.emailCheck) throw new Error();
    yield put(checkSuccess(email));
    yield put(setSignInModal());
  } catch (error) {
    yield put(checkFail(error));
    yield put(setSignUpModal());
  }
}

// function* logoutSaga() {
//   UserService.logout();
// }

export function* checkMailSaga() {
  yield takeEvery(START_CHECK_SAGA, checkSaga);
}
