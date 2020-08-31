const prefix = 'modal/';
const OFF = `${prefix}OFF`;
const WELCOME_IN = `${prefix}WELCOME_IN`;
const SIGN_IN = `${prefix}SIGN_IN`;
const SIGN_UP = `${prefix}SIGN_UP`;

export const offModal = () => ({
  type: OFF,
});

const contentTypes = {
  preLogin: '🏄 시작하기',
  login: '로그인',
  signup: '가입하기',
};

export const welcomeModal = () => ({
  type: WELCOME_IN,
  content: contentTypes.preLogin,
  preLogin: true,
});

export const setSignInModal = () => ({
  type: SIGN_IN,
  content: contentTypes.login,
  forLogin: true,
});

export const setSignUpModal = () => ({
  type: SIGN_UP,
  content: contentTypes.signup,
  forSignUp: true,
});

const initialState = {
  isModalOn: false,
  content: '',
  preLogin: false,
  forLogin: false,
  forConfirm: false,
  forNoti: false,
  forSignUp: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case WELCOME_IN:
      return {
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
