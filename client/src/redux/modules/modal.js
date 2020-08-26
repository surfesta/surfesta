const prefix = 'modal/';
const OFF = `${prefix}OFF`;
const SIGN_IN_ON = `${prefix}SIGN_IN_ON`;

export const offModal = () => ({
  type: OFF,
});

const contentTypes = {
  login: '🏄 시작하기',
};

export const setSignInModal = (content = contentTypes.login) => ({
  type: SIGN_IN_ON,
  content,
  forLogin: true,
  forConfirm: false,
  forNoti: false,
});
export const setSingOutModal = (content = contentTypes.login) => ({
  type: SIGN_IN_ON,
  content,
  forLogin: true,
  forConfirm: false,
  forNoti: false,
});

const initialState = {
  isModalOn: false,
  content: '',
  forLogin: true,
  forConfirm: false,
  forNoti: false,
};

export default (state = initialState, action) => {
  const { type, content, forLogin, forConfirm, forNoti } = action;
  switch (type) {
    case SIGN_IN_ON:
      return {
        isModalOn: true,
        content,
        forLogin,
        forConfirm,
        forNoti,
      };
    case OFF:
      return {
        isModalOn: false,
        content: '',
        forLogin: false,
        forConfirm: false,
        forNoti: false,
      };
    default:
      return state;
  }
};
