import React, { useEffect } from 'react';
import PreLoginForm from '../molecule/login/PreLoginForm';
import LoginForm from '../molecule/login/LoginForm';
import RegisterForm from '../molecule/login/RegisterForm';
import Portal from '../../utils/Portal';
import { useDispatch, useSelector } from 'react-redux';
import { offModal } from '../../redux/modules/modal';
import { useCallback } from 'react';
import WaveSurf from '../molecule/modal/WaveSurf';
import { checkSagaActionCreator } from '../../redux/modules/mailCheck';
import {
  signupSagaActionCreator,
  startSocialSDKLogin,
} from '../../redux/modules/auth';
import './Modal.scss';

export default function Modal() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  useEffect(() => {
    if (modal.isModalOn) {
      document.querySelector('body').style.overflow = 'hidden';
    }
    return () => {
      document.querySelector('body').style.overflow = 'inherit';
    };
  }, [modal.isModalOn]);
  // 모달 상태가 Notification알림 이라면, 알아서 꺼짐
  if (modal.forNoti) {
    setTimeout(() => {
      dispatch(offModal());
    }, 150);
  }

  // 모달 밖을 클릭하면 모달이 꺼집니다
  const dismissModal = useCallback(
    (e) => {
      if (!e.target.matches('#modal-container')) return;
      dispatch(offModal());
    },
    [dispatch]
  );
  // 모달은 redux-store에 저장된 상태에 따라 다른 UI가 됩니다(다른 자식컴포넌트를 보여줍니다)

  const handleEmailCheck = useCallback(
    (values) => {
      dispatch(checkSagaActionCreator(values));
    },
    [dispatch]
  );
  const handleRegister = useCallback(
    (values) => {
      dispatch(signupSagaActionCreator(values));
    },
    [dispatch]
  );

  const handleFBLogin = useCallback(
    ({ email, name: username, id: password, picture }) => {
      dispatch(
        startSocialSDKLogin({
          email,
          username,
          password,
          profile_img: picture.data.url,
        })
      );
    },
    [dispatch]
  );

  const handleGGLogin = useCallback(
    ({ profileObj }) => {
      const {
        email,
        familyName,
        givenName,
        googleId: password,
        imageUrl: profile_img,
      } = profileObj;
      const username = familyName + givenName;
      dispatch(startSocialSDKLogin({ email, username, password, profile_img }));
    },
    [dispatch]
  );

  return (
    <Portal>
      <section id="modal-container" onClick={dismissModal} style={{}}>
        <div id="modal">
          <h1 className="modal-headline">{modal.content}</h1>
          {modal.preLogin && (
            <PreLoginForm
              handleEmailCheck={handleEmailCheck}
              handleFBLogin={handleFBLogin}
              handleGGLogin={handleGGLogin}
            />
          )}
          {modal.forLogin && <LoginForm />}
          {modal.forSignUp && (
            <RegisterForm
              handleRegister={handleRegister}
              presetValue={modal.presetValue}
            />
          )}
          {modal.forConfirm && (
            <>
              <button>확인</button>
              <button>취소</button>
            </>
          )}
          {(modal.preLogin || modal.forLogin || modal.forSignUp) && (
            <WaveSurf />
          )}
        </div>
      </section>
    </Portal>
  );
}
