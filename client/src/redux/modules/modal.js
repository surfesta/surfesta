const prefix = 'modal/';
const OFF = `${prefix}OFF`;
const WELCOME_IN = `${prefix}WELCOME_IN`;
const SIGN_IN = `${prefix}SIGN_IN`;
const SIGN_UP = `${prefix}SIGN_UP`;

export const offModal = () => ({
  type: OFF,
});

const CONTENT_TYPES = {
  PRE_LOGIN: '시작하기',
  LOGIN: '로그인',
  SIGNUP: 'Surfesta와 함께하기',
};

export const welcomeModal = (content = CONTENT_TYPES.PRE_LOGIN) => ({
  type: WELCOME_IN,
  content,
  preLogin: true,
});

export const setSignInModal = (email, content) => ({
  type: SIGN_IN,
  content: content || CONTENT_TYPES.LOGIN,
  forLogin: true,
  presetValue: { email },
});

export const setSignUpModal = (email) => ({
  type: SIGN_UP,
  content: CONTENT_TYPES.SIGNUP,
  forSignUp: true,
  presetValue: { email },
});

const initialState = {
  isModalOn: false,
  content: '',
  preLogin: false,
  forLogin: false,
  forConfirm: false,
  forNoti: false,
  forSignUp: false,
  presetValue: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case WELCOME_IN:
      return {
        ...state,
        isModalOn: true,
        content: action.content,
        preLogin: action.preLogin,
        forLogin: false,
        forConfirm: false,
        forNoti: false,
        forSignUp: false,
      };
    case SIGN_IN:
      return {
        ...state,
        isModalOn: true,
        content: action.content,
        forLogin: action.forLogin,
        preLogin: false,
        forConfirm: false,
        forNoti: false,
        forSignUp: false,
      };
    case SIGN_UP:
      return {
        presetValue: action.presetValue,
        isModalOn: true,
        content: action.content,
        forSignUp: action.forSignUp,
        preLogin: false,
        forLogin: false,
        forConfirm: false,
        forNoti: false,
      };
    case OFF:
      return {
        ...state,
        isModalOn: false,
      };
    default:
      return state;
  }
}
