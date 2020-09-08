// import { put, delay, call, takeEvery } from 'redux-saga/effects';
// import UserService from '../../services/UserService';

// const prefix = 'surfesta-users';

// // action type
// const START = `${prefix}/START`;
// const SUCCESS = `${prefix}/SUCCESS`;
// const FAIL = `${prefix}/FAIL`;

// // action creator
// export const start = () => ({
//   type: START,
// });

// export const success = (users) => ({
//   type: SUCCESS,
//   users,
// });

// export const fail = (error) => ({
//   type: FAIL,
//   error,
// });

// // initial state
// const initialState = {
//   users: [],
//   loading: false,
//   error: null,
// };

// // reducer
// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case START:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case SUCCESS:
//       return {
//         users: action.users,
//         loading: false,
//         error: null,
//       };
//     case FAIL:
//       return {
//         users: [],
//         loading: false,
//         error: action.error,
//       };

//     default:
//       return state;
//   }
// }

// //saga-action
// const START_GET_USERS = `${prefix}/START_GET_USERS`;

// export const startGetUsers = () => ({
//   type: START_GET_USERS,
// });

// //saga-reducer
// function* startGetUsersSaga() {
//   try {
//     yield put(start());
//     yield delay(100);
//     const users = yield call(UserService.getUsers);
//     yield put(success(users));
//     // console.log(users);
//   } catch (error) {
//     yield put(fail(error));
//   }
// }

// export function* usersSaga() {
//   yield takeEvery(START_GET_USERS, startGetUsersSaga);
// }
