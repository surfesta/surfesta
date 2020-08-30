const prefix = 'modal/';
const OFF = `${prefix}OFF`;
const WELCOME_IN = `${prefix}WELCOME_IN`;
const SIGN_IN = `${prefix}SIGN_IN`;
const SIGN_OUT = `${prefix}SIGN_OUT`;

export const offModal = () => ({
  type: OFF,
});

const contentTypes = {
  preLogin: '🏄 시작하기',
  login: '로그인',
  logout: '로그아웃',
};

export const welcomeModal = (content = contentTypes.preLogin) => ({
  type: WELCOME_IN,
  content,
  preLogin: true,
  forLogin: false,
  forConfirm: false,
  forNoti: false,
});

export const setSignInModal = (content = contentTypes.login) => ({
  type: SIGN_IN,
  content,
  // preLogin: true,
  forLogin: true,
  // forConfirm: false,
  // forNoti: false,
});

export const setSingOutModal = (content = contentTypes.logout) => ({
  type: SIGN_OUT,
  content,
  // preLogin: false,
  forLogin: false,
  // forConfirm: false,
  // forNoti: false,
});

const initialState = {
  isModalOn: true,
  content: contentTypes.preLogin,
  preLogin: true,
  forLogin: false,
  forConfirm: false,
  forNoti: false,
};

export default function reducer(state = initialState, action) {
  const { type, content, preLogin, forLogin, forConfirm, forNoti } = action;
  switch (type) {
    case WELCOME_IN:
      return {
        isModalOn: true,
        content,
        preLogin,
        forLogin,
        forConfirm,
        forNoti,
      };
    case SIGN_IN:
      return {
        isModalOn: true,
        content,
        preLogin: false,
        forLogin,
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
