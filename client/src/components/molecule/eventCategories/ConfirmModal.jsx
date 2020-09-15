import React from 'react';
import { useEffect } from 'react';
import Portal from '../../Portal';

export default function ConfirmModal({ toggleEnlisted, setVisible }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'inherit');
  }, []);

  return (
    <Portal>
      <div
        id="modal-container"
        onClick={(e) => {
          if (!(e.target === e.currentTarget)) return;
          setVisible(false);
        }}
      >
        <div id="modal" className="confirm-modal">
          <h1>이벤트 참가를 취소할까요?</h1>
          <button className="cancel" onClick={() => setVisible(false)}>
            취소
          </button>
          <button className="confirm" onClick={toggleEnlisted}>
            확인
          </button>
        </div>
      </div>
    </Portal>
  );
}
