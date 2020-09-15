import React from 'react';
import { useEffect } from 'react';
import Portal from '../../Portal';

export default function ConfirmModal({ setVisible }) {
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
          <h1>이벤트 참가신청이 완료되었습니다.</h1>
        </div>
      </div>
    </Portal>
  );
}
