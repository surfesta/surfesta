const prefix = 'my-books/auth';
// action type
const START = `${prefix}/START`;
const SUCCESS = `${prefix}/SUCCESS`;
const FAIL = `${prefix}/FAIL`;

// action creator
const loginStart = () => ({
  type: START,
});
const loginSucess = (token) => ({
  type: SUCCESS,
  token,
});
const loginFail = (error) => ({
  type: FAIL,
  error,
});

// initial state
const initialState = {
  loading: false,
  token: null,
  error: null,
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
        ...state,
        token: action.token,
      };
    case FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
