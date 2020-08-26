import React from 'react';
import LoginForm from '../molecule/login/LoginForm';
import Portal from '../../utils/Portal';
import { useDispatch, useSelector } from 'react-redux';
import { offModal } from '../../redux/modules/modal';
import './Modal.css';
import { useCallback } from 'react';

export default function LoginModal() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  if (modal.forNoti) {
    setTimeout(() => {
      dispatch(offModal());
    }, 140);
  }

  const dismissModal = useCallback(
    (e) => {
      if (!e.target.matches('#modal-container')) return;
      dispatch(offModal());
    },
    [dispatch],
  );
  return (
    <Portal>
      <section id="modal-container" onClick={dismissModal} style={{}}>
        <div id="modal">
          <h1>{modal.content}</h1>
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
