import React from 'react';
import PreLoginForm from '../molecule/login/PreLoginForm';
import LoginForm from '../molecule/login/LoginForm';
import Portal from '../../utils/Portal';
import { useDispatch, useSelector } from 'react-redux';
import { offModal } from '../../redux/modules/modal';
import './Modal.css';
import { useCallback } from 'react';

export default function Modal() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

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
  return (
    <Portal>
      <section id="modal-container" onClick={dismissModal} style={{}}>
        <div id="modal">
          <h1>{modal.content}</h1>
          {modal.preLogin && <PreLoginForm />}
          {modal.forLogin && <LoginForm />}
          {modal.forConfirm && (
            <>
              <button>확인</button>
              <button>취소</button>
            </>
          )}
        </div>
      </section>
    </Portal>
  );
}
